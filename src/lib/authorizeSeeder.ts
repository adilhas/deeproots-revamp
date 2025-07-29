/* eslint-disable @typescript-eslint/no-unused-vars */
type Credentials = {
  username: string;
  password: string;
};
export async function authorizeSeeder(credentials: Credentials | undefined) {
  // Replace this with real DB logic later
  // if (
  //   credentials?.username === 'seeder@example.com' &&
  //   credentials?.password === 'seederpass'
  // ) {
  //   return {
  //     id: '2',
  //     name: 'SeederUser',
  //     role: 'seeder',
  //   };
  // }

  return null;
}
