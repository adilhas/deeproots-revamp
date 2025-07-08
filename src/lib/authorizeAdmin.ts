type Credentials = {
  username: string;
  password: string;
};
export async function authorizeAdmin(credentials: Credentials | undefined) {
  if (
    credentials?.username === 'admin' &&
    credentials?.password === 'pass12345'
  ) {
    return {
      id: '1',
      name: 'Admin',
      role: 'admin',
    };
  }

  return null;
}
