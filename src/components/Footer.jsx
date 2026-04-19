export default function Footer({ brand }) {
  return (
    <footer className="bg-slate-950 py-8 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          {brand.name} | {brand.city}, South Carolina
        </p>
        <p>
          Professional Paralegal Services in Upstate SC | {brand.phone} | {brand.email}
        </p>
      </div>
    </footer>
  );
}
