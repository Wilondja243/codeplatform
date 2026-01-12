import { toast } from 'react-toastify';

const useNotification = () => {
    const notifySuccess = (message: string) => {
        toast.success(message, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,

            style: {
                borderRadius: '10px',
                background: '#f6ffed',
                color: '#52c41a',
            },
        });
    };

    const notifyError = (message: string) => {
        toast.error(message || 'Une erreur est survenue', {
            position: 'top-right',
            autoClose: 5000,
            style: {
                borderRadius: '3px',
                background: '#f5f5f5ff',
                color: '#ff4d4f',
                width: 350,
            },
        });
    };

    const notifyInfo = (message: string) => {
        toast.info(message, {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            style: {
                borderRadius: '8px',
                background: '#faedcd',
                color: '#f59e0b',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: '12px 16px',
                fontWeight: 500,
                fontSize: '0.95rem',
                minWidth: '300px',
            },
        });
    };

    return { notifySuccess, notifyError, notifyInfo };
};

export default useNotification;
