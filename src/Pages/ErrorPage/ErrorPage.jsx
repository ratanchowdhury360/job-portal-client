import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'Something went wrong';
  let message = 'An unexpected error occurred. Please try again.';
  let status = '';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.data || error.statusText || message;
  } else if (error instanceof Error) {
    message = error.message || message;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="max-w-lg w-full bg-base-100 shadow-xl rounded-xl p-8 text-center space-y-4">
        <h1 className="text-3xl font-bold text-error">{title}</h1>
        {status && (
          <p className="text-sm opacity-70">
            Status code: <span className="font-mono">{status}</span>
          </p>
        )}
        <p className="text-base-content/80 whitespace-pre-wrap">{message}</p>
        <div className="flex gap-3 justify-center pt-4">
          <button
            className="btn btn-neutral"
            onClick={() => {
              // simple “try again”
              window.location.reload();
            }}
          >
            Try again
          </button>
          <Link to="/" className="btn btn-ghost">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;


