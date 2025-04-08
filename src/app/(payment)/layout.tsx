export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mt-78">
      <div className="w-618">{children}</div>
    </div>
  );
}
