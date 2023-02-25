import Link from "next/link";

interface NavbarListProps {
  title: string;
  href: string;
}

export default function NavbarList(props: NavbarListProps) {
  return (
    <Link
      className="md:hover:underline dark:text-white text-darkText max-[768px]:hover:text-darkText underline-offset-4 rounded-xl duration-300 max-[768px]:hover:bg-gray-100 p-2"
      href={`${props.href}`}
      // href={{ pathname: props.href }}
    >
      <li>{props.title}</li>
    </Link>
  );
}
