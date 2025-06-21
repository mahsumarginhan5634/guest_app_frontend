import {Badge} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";

export default function NotificationActions() {
    return (
        <>
            <div className="flex items-center justify-end gap-10 w-full">
                {/*Burası istek , yorum , beğeni gibi bildirimlere hizmet edecek*/}
                <Badge badgeContent={4} color="primary">
                    <NotificationsNoneIcon fontSize="medium"/>
                </Badge>

                {/*Burası mesaj bildirimlerine hizmet edecek*/}
                <Badge badgeContent={4} color="primary">
                    <InsertCommentOutlinedIcon fontSize="medium"/>
                </Badge>
            </div>
        </>
    );
}
