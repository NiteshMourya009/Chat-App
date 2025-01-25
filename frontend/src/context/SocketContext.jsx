import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
import process from 'process';



const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
           // console.log("Auth user:", authUser);
            
            const socketUrl = process.env.NODE_ENV === "production" ? "https://your-production-url" : "http://localhost:5000";
            const socket = io(socketUrl, {
                query: { userId: authUser._id },
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
              //  console.log("Online users received:", users);
                setOnlineUsers(users);
            });

            socket.on("connect_error", (err) => {
                console.error("Socket connection error:", err);
            });

            socket.on("disconnect", () => {
                console.log("Socket disconnected");
            });

            return () => {
                console.log("Closing socket connection");
                socket.close();
            };
        } else {
            if (socket) {
                console.log("Closing socket connection due to no authUser");
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
