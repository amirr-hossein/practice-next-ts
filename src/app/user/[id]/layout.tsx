import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = ({ params }: Props): Metadata => {

  return {
    title: `Title by ${params.id}`,
  };
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
