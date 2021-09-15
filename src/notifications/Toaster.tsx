import React from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare type Theme = 'light' | 'dark' | 'colored';
const theme: Theme = 'colored';

const globalToastOptions = {
    autoClose: 3000,
    delay: 50,
    progress: 0.2,
    limit: 3,
    closeOnClick: true,
    hideProgressBar: true,
    pauseOnHover: true,
    newestOnTop: true,
    position: toast.POSITION.BOTTOM_RIGHT,
    transition: Zoom,
    theme: theme
};


export const success = (message: any, options = {}) => toast.success(message, { ...options });
export const error = (message: any, options = {}) => toast.error(message, { ...options });
export const warning = (message: any, options = {}) => toast.warning(message, { ...options });

export const NotificationContainer: React.FC = () => {
    return (<ToastContainer {...globalToastOptions} />);
};