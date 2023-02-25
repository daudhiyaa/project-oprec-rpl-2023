import Link from "next/link";

interface FooterListProps {
  title: string;
}

export default function FooterList(props: FooterListProps) {
  return (
    <li>
      <Link href="#" className="hover:underline">
        {props.title}
      </Link>
    </li>
  );
}
