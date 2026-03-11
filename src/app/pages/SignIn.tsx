import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { FreshLogo } from '../components/FreshLogo';

export function SignIn() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Mock Google sign-in
    navigate('/');
  };

  const handleAppleSignIn = () => {
    // Mock Apple sign-in
    navigate('/');
  };

  const handleGuestMode = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <FreshLogo size={160} variant="full" />
          </div>
          <p className="text-lg text-[var(--text-secondary)]">
            Votre assistant culinaire IA
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-br from-[var(--color-cream)] to-white dark:from-[var(--card)] dark:to-[var(--muted)] rounded-[var(--radius-xl)] p-8">
            <div className="text-8xl">🍲</div>
          </div>
        </div>

        {/* Sign-in Options */}
        <div className="space-y-4 mb-8">
          <Button
            onClick={handleGoogleSignIn}
            variant="outline"
            className="w-full h-14 bg-white dark:bg-card border-2 border-[var(--border)] hover:border-[var(--color-teal)] hover:bg-white dark:hover:bg-card rounded-[var(--radius-lg)] flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-sans font-medium text-[var(--text)]">Continuer avec Google</span>
          </Button>

          <Button
            onClick={handleAppleSignIn}
            className="w-full h-14 bg-black hover:bg-gray-900 text-white rounded-[var(--radius-lg)] flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span className="font-sans font-medium">Continuer avec Apple</span>
          </Button>
        </div>

        {/* Guest Mode */}
        <div className="text-center">
          <button
            onClick={handleGuestMode}
            className="text-sm text-[var(--color-teal)] hover:text-[var(--color-teal-light)] transition-colors font-medium"
          >
            Explorer sans compte →
          </button>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[var(--text-light)] leading-relaxed">
            En continuant, vous acceptez nos conditions d'utilisation
            <br />
            et notre politique de confidentialité
          </p>
        </div>
      </div>
    </div>
  );
}