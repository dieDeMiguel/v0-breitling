import Image from "next/image";

export default function BreitlingLogo() {
  return (
    <Image
      src="https://www.breitling.com/_next/static/images/breitling-140.svg"
      alt="Breitling"
      width={250}
      height={60}
      className="h-14"
    />
  );
} 