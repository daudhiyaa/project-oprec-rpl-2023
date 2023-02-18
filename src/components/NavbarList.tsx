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
        href={{
          pathname: props.href,
          // pathname: `/${props.title.toLowerCase()}`,
        }}
      >
        {props.title}
      </Link>
    </li>
  );
}
