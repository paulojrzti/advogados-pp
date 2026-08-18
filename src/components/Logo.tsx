import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  src?: string;
};

export default function Logo({
  className = "",
  src = "/images/scale-logo.svg",
}: LogoProps) {
  return (
    <Link href="/" aria-label="Ir para a página inicial da Scale Company" className="flex items-center">
      <Image
        src={src}
        alt="Scale Company"
        width={584}
        height={182}
        priority
        className={`h-9 w-auto ${className}`}
      />
    </Link>
  );
}
