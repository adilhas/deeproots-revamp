import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-48 md:h-[500px] lg:h-[750px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/landing/deeproot-banner.jpg')",
        }}
      ></div>
    </div>
  );
}
