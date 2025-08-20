import { LiaGithubAlt, LiaLinkedinIn, LiaMailBulkSolid } from 'react-icons/lia';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto  grid grid-cols-2 h-12 text-2xl items-center pb-4">
      <p className='font-semibold'>Projeto desenvolvido por: Thiago Faccipieri - {year} ©</p>
      <div className="flex gap-4 justify-end text-3xl">
        <LiaLinkedinIn className='hover:text-accent' />
        <LiaGithubAlt className='hover:text-accent' />
        <LiaMailBulkSolid className='hover:text-accent' />
      </div>
    </div>
  );
}

export default Footer;
