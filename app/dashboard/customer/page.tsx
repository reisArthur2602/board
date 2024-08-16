import { Container } from '@/app/components/container';
import Link from 'next/link';

const Customer = () => {
  return (
    <Container>
      <section className="mt-14 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1>Cliente</h1>
          <button className="bg-cyan-500 text-slate-50">
            <Link href="/dashboard/new">Cadastrar Cliente</Link>
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Customer;
