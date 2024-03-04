export const useAuth = () => {
  const auth = JSON.parse(localStorage.getItem("auth")!);
  if (!auth) return null;
  return { auth };
};
