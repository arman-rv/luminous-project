import { type Locale } from "#/i18n.config";

const CartPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <main className="flex h-full items-center justify-center">
      <h1 className="text-xl">صفحه‌ی سبد خرید</h1>
    </main>
  );
};

export default CartPage;
