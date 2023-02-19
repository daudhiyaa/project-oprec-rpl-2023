import Link from "next/link";

interface NavbarListProps {
  title: string;
  href: string;
}

export default function NavbarList(props: NavbarListProps) {
  return (
    <li>
      <Link
        className="hover:underline underline-offset-4"
        // href={{ pathname: props.href }}
        href={`${props.href}`}
      >
        {props.title}
      </Link>
    </li>
  );
}
