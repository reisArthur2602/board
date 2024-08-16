import { Container } from '@/app/components/container';
import { NavMenu } from '@/app/components/nav-menu';

const NewCustomer = () => {
  const paths = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/customer', label: 'Clientes' },
    { href: '/dashboard/customer/new', label: 'Cadastrar Cliente' },
  ];

  return (
    <Container>
      <div className="mt-14">
        <NavMenu paths={paths} />
      </div>
    </Container>
  );
};

export default NewCustomer;
