import { redirect } from "next/navigation";

interface Props {
  params: { locale: string };
}

const RootPage = async ({ params: { locale } }: Props) => {
  redirect(`/${locale}/home`);
};
export default RootPage;
