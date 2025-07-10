import React, { useState } from "react";
import {getUserFromLocalStorage, setUserToLocalStorage} from "../../store/localStorage.js";
import {
    IconButton,
    Tooltip,
    CircularProgress,
    Box,
    DialogContent,
    Dialog,
    DialogTitle,
    Typography
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { updateUserAvatar } from "../../services/UserService.js";
import {Image} from "primereact/image";
import CustomAvatar from "./CustomAvatar.jsx";
import {useTranslation} from "react-i18next";

export default function AvatarUpdater() {
    const user = getUserFromLocalStorage();
    const [file, setFile] = useState(null);
    const [newAvatarUrl, setNewAvatarUrl] = useState(user?.avatarUrl || null);
    const [uploading, setUploading] = useState(false);
    const [dialogStatus , setDialogStatus] = useState(false);
    const {t} = useTranslation();

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            await handleUpload(selectedFile, user.id);
        }
    };

    const handleUpload = async (file,userId) => {
        try {
            setUploading(true);
            const tempResponse = await updateUserAvatar(file,userId);

            if(tempResponse.ok){
                const response = await tempResponse.json();
                if(response.meta.code === "200"){
                    setNewAvatarUrl(response.data.avatarUrl);
                    setUserToLocalStorage(response.data)
                }
            }

        } catch (error) {
            alert("Avatar güncellenemedi." + error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <>
            <Dialog open={dialogStatus}
                    onClose={() => setDialogStatus(false)}
                    maxWidth="xs"
                    fullWidth
                    className={"rounded-lg"}
            >
                <DialogTitle
                    className="bg-gradient-to-r from-gray-900 to-white-500 text-white flex items-center justify-between py-4 px-6"
                >
                    <Typography variant="h6">
                        {t("profileImagePreview")}
                    </Typography>
                </DialogTitle>

                <DialogContent  className={"!p-0 min-h-[500px] flex justify-center items-center"}>
                    <Image src={newAvatarUrl} />
                </DialogContent>
            </Dialog>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                <Box position="relative">
                    <CustomAvatar
                        className={"cursor-pointer"}
                        title={t("previewImage")}
                        onClick={() => setDialogStatus(true) }
                        src={newAvatarUrl}
                        sx={{ width: 100, height: 100 }}
                    />
                    <label htmlFor="avatar-upload-input">
                        <input
                            accept="image/*"
                            id="avatar-upload-input"
                            type="file"
                            hidden
                            onChange={handleFileChange}
                        />
                        <Tooltip title="Avatarı değiştir">
                            <IconButton
                                component="span"
                                sx={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    backgroundColor: "white",
                                    boxShadow: 1,
                                }}
                            >
                                <PhotoCamera fontSize="medium" />
                            </IconButton>
                        </Tooltip>
                    </label>
                    {
                        uploading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    position: "absolute",
                                    top: "35%",
                                    left: "35%",
                                    zIndex: 10,
                                }}
                            />
                        )}
                </Box>
            </Box>
        </>
    );
}
