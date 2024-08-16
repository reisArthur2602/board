import React from 'react';
import { Container } from './components/container';
import Image from 'next/image';

const Home = () => {
  return (
    <Container className="flex h-full items-center justify-center">
      <section>
        <div className="mb-14 flex flex-col items-center justify-center gap-3">
          <h1>
            Mais que atender, {''}
            <span className="font-black text-cyan-500">ENTENDER.</span>
          </h1>
          <p className="text-2xl">
            Gerencie sua empresa , atendimentos e clientes
          </p>
        </div>
        <Image
          src="/hero-image.svg"
          alt="Imagem hero"
          height={425}
          width={800}
        />
      </section>
    </Container>
  );
};

export default Home;
