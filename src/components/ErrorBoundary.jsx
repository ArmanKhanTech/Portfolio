import React from "react";

// Renders `fallback` instead of unmounting the whole app when a child throws,
// e.g. a lazy chunk that still fails after lazyWithReload's one reload.
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("[ErrorBoundary]", error);
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

export default ErrorBoundary;
