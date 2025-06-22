import React, { useState, useMemo } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    InputBase,
    Avatar,
    Divider,
    Button,
    Box,
    Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useTranslation} from "react-i18next";
import {FollowType} from "../../../utils/Enums.js";

export default function FollowDialog({ open, onClose, follows, followType }) {
    const [searchTerm, setSearchTerm] = useState('');
    const {t} = useTranslation();
    const filteredFollows = useMemo(() => {
        const term = searchTerm.toLowerCase();
        return follows.filter(follow =>
            (follow.username?.toLowerCase().includes(term)) ||
            (follow.name?.toLowerCase().includes(term))
        );
    }, [searchTerm, follows]);

    const handleProfileClick = (name) => {
        alert(`${name} profiline gidiliyor...`);
    };

    // Basit avatar renkleri, avatarId'ye göre atanabilir istersen
    const avatarColors = [
        '#ec4899', '#3b82f6', '#8b5cf6', '#f59e0b', '#10b981', '#ef4444'
    ];

    return (
        <>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="xs"
                fullWidth
                className={"rounded-lg"}
            >
                <DialogTitle
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-between py-4 px-6"
                >
                    <Typography variant="h6">
                        {followType === FollowType.FOLLOWED ?  "Takip ettiklerim" : "Takipçilerim"}
                    </Typography>
                    <Box
                        className="bg-white/20 px-4 py-1 rounded-full text-sm font-medium"
                    >
                        {follows.length} {followType === FollowType.FOLLOWED ?  t("following") : t("followers")}
                    </Box>
                </DialogTitle>

                <DialogContent dividers className="px-4 py-2 space-y-2 bg-[whitesmoke]">
                    <div className="relative mb-2">
                        <InputBase
                            fullWidth
                            placeholder="Takipçi ara..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    </div>

                    {filteredFollows.map((follow, index) => (
                        <div key={index}>
                            <div className="flex justify-between items-center py-2">
                                <div className="flex items-center gap-4">
                                    <Avatar
                                        sx={{
                                            background: avatarColors[index % avatarColors.length] || '#999',
                                            width: 48,
                                            height: 48,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {follow.name?.charAt(0).toUpperCase() || '?'}
                                    </Avatar>
                                    <div>
                                        <p className="font-medium">{follow.name}</p>
                                        <p className="text-sm text-gray-500">@{follow.username}</p>
                                    </div>
                                </div>
                                <Button
                                    variant="text"
                                    className="text-blue-500 normal-case"
                                    onClick={() => handleProfileClick(follow.name)}
                                >
                                    Profil
                                </Button>
                            </div>
                            {index < filteredFollows.length - 1 && <Divider />}
                        </div>
                    ))}
                </DialogContent>

                <DialogActions className="flex w-full justify-between items-center px-4 py-3 bg-gray-50">
                    <div className="flex-1">
                        <Button onClick={onClose} className="text-gray-600 normal-case">
                            Kapat
                        </Button>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <Button
                            variant="contained"
                            className="bg-blue-500 hover:bg-blue-600 normal-case"
                        >
                            Tümünü Gör
                        </Button>
                    </div>
                </DialogActions>
            </Dialog>
        </>
    );
}
