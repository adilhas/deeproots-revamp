type Credentials = {
  username: string;
  password: string;
};
export async function authorizeAdmin(credentials: Credentials | undefined) {
  if (
    credentials?.username === process.env.ADMIN_EMAIL &&
    credentials?.password === process.env.ADMIN_PASSWORD
  ) {
    return {
      id: '1',
      name: 'Admin',
      role: 'admin',
    };
  }

  return null;
}
