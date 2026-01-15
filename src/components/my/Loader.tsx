'use client';
import React, { useMemo } from 'react';

type LoaderSize = 'xs' | 'small' | 'default' | 'large' | 'xl';
type SpinnerVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

interface LoaderProps {
  size?: LoaderSize;
  text?: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
  'aria-label'?: string;
}

interface SpinnerLoaderProps {
  variant?: SpinnerVariant;
  size?: LoaderSize;
  color?: string;
  backgroundColor?: string;
  className?: string;
  'aria-label'?: string;
}

interface LoadingScreenProps {
  message?: string;
  color?: string;
  backgroundColor?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  blur?: boolean;
  className?: string;
  'aria-label'?: string;
}

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  loaderColor?: string;
  loaderBackgroundColor?: string;
  loaderSize?: LoaderSize;
}

// Mapeo de tamaños
const sizeMap: Record<LoaderSize, string> = {
  xs: 'w-4 h-4',
  small: 'w-6 h-6',
  default: 'w-10 h-10',
  large: 'w-14 h-14',
  xl: 'w-20 h-20',
};

// Mapeo de variantes a colores
const variantMap: Record<SpinnerVariant, string> = {
  primary: 'border-dos',
  secondary: 'border-divisiones',
  success: 'border-green-500',
  error: 'border-red-500',
  warning: 'border-yellow-500',
  info: 'border-blue-500',
};

// Colores por defecto
const DEFAULT_COLOR = '#9CA3AF'; // gray-400
const DEFAULT_BACKGROUND_COLOR = '#E5E7EB'; // gray-200

/**
 * Componente Loader básico con spinner circular
 */
export default function Loader({
  size = 'default',
  text = '',
  color,
  backgroundColor,
  className = '',
  'aria-label': ariaLabel = 'Cargando',
}: LoaderProps) {
  const sizeClass = sizeMap[size] || sizeMap.default;

  const spinnerStyle = useMemo(
    () => ({
      borderColor: color || DEFAULT_COLOR,
      borderTopColor: 'transparent',
    }),
    [color]
  );

  const backgroundStyle = useMemo(
    () => ({
      borderColor: backgroundColor || DEFAULT_BACKGROUND_COLOR,
    }),
    [backgroundColor]
  );

  return (
    <div className={`flex flex-col items-center justify-center ${className}`} role="status" aria-label={ariaLabel}>
      <div className={`${sizeClass} relative`}>
        {/* Círculo de fondo */}
        <div
          className="absolute inset-0 rounded-full border-4"
          style={backgroundStyle}
          aria-hidden="true"
        />

        {/* Círculo de progreso animado */}
        <div
          className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
          style={spinnerStyle}
          aria-hidden="true"
        />
      </div>

      {text && (
        <p className="mt-2 text-sm text-gray-600" aria-live="polite">
          {text}
        </p>
      )}
    </div>
  );
}

/**
 * Componente SpinnerLoader con variantes predefinidas
 */
export function SpinnerLoader({
  variant = 'primary',
  size = 'default',
  color,
  backgroundColor,
  className = '',
  'aria-label': ariaLabel = 'Cargando',
}: SpinnerLoaderProps) {
  const sizeClass = sizeMap[size] || sizeMap.default;
  const borderColor = variantMap[variant] || variantMap.primary;
  const defaultBackgroundColor = DEFAULT_BACKGROUND_COLOR;

  const spinnerStyle = useMemo(
    () =>
      color
        ? {
            borderColor: color,
            borderTopColor: 'transparent',
          }
        : {},
    [color]
  );

  const backgroundStyle = useMemo(
    () =>
      backgroundColor
        ? {
            borderColor: backgroundColor,
          }
        : {},
    [backgroundColor]
  );

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label={ariaLabel}
    >
      <div className={`${sizeClass} relative`}>
        {/* Círculo de fondo */}
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            !backgroundColor ? 'border-gray-200' : ''
          }`}
          style={backgroundStyle}
          aria-hidden="true"
        />
        {/* Círculo de progreso animado */}
        <div
          className={`absolute inset-0 rounded-full border-4 border-t-transparent animate-spin ${
            !color ? borderColor : ''
          }`}
          style={spinnerStyle}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

/**
 * Componente LoadingScreen que muestra un overlay de carga
 */
export function LoadingScreen({
  message = 'Cargando...',
  color,
  backgroundColor,
  overlayColor = 'white',
  overlayOpacity = 0.9,
  blur = false,
  className = '',
  'aria-label': ariaLabel = 'Cargando contenido',
}: LoadingScreenProps) {
  const overlayStyle = useMemo(
    () => ({
      backgroundColor: overlayColor,
      opacity: overlayOpacity,
    }),
    [overlayColor, overlayOpacity]
  );

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center z-50 ${
        blur ? 'backdrop-blur-sm' : ''
      } ${className}`}
      style={overlayStyle}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    >
      <Loader size="large" color={color} backgroundColor={backgroundColor} />
      {message && (
        <p className="mt-4 text-lg font-medium text-gray-700">{message}</p>
      )}
    </div>
  );
}

/**
 * Componente LoadingButton que muestra un estado de carga en un botón
 */
export function LoadingButton({
  loading = false,
  children,
  className = '',
  disabled = false,
  loaderColor,
  loaderBackgroundColor,
  loaderSize = 'small',
  ...props
}: LoadingButtonProps) {
  const isDisabled = loading || disabled;

  return (
    <button
      disabled={isDisabled}
      className={`relative inline-flex items-center justify-center px-4 py-2 bg-dos hover:bg-divisiones text-white font-medium rounded-lg transition-all duration-200 ${
        loading ? 'opacity-80 cursor-wait' : ''
      } ${isDisabled && !loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      aria-busy={loading}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading && (
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <Loader
            size={loaderSize}
            color={loaderColor}
            backgroundColor={loaderBackgroundColor}
          />
        </span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
}

