export default function GoogleLoginButton() {
    const handleLogin = () => {
        const width = 500;
        const height = 600;
        const left = window.screenX + (window.innerWidth - width) / 2;
        const top = window.screenY + (window.innerHeight - height) / 2;

        window.open(
            'http://localhost:3000/api/auth/signin/google',
            'GoogleLogin',
            `width=${width},height=${height},top=${top},left=${left},resizable,scrollbars`,
        );
    };

    return handleLogin;
}
