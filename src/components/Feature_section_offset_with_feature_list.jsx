import { CheckIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Variedad de Productos',
    description:
      'Contamos con un inventario diverso que se actualiza constantemente para ofrecerte lo más nuevo en tecnología',
  },
  {
    name: 'Asesoría Personalizada',
    description:
      'Nuestro equipo de expertos está siempre disponible para ayudarte a encontrar el producto perfecto que se ajuste a tus necesidades y presupuesto.',
  },
  {
    name: 'Servicio técnico en computación',
    description:
      'Con nuestro servicio de asistencia técnica, podrás obtener ayuda rápida y eficaz para resolver cualquier problema que tengas.',
  },
  {
    name: 'Experiencia de Compra Inigualable',
    description:
      'Disfruta de un ambiente moderno y acogedor donde puedes probar y experimentar con los últimos gadgets antes de comprarlos.',
  },
  {
    name: 'Atención al Cliente',
    description:
      'Tu satisfacción es nuestra prioridad. Ofrecemos servicios postventa y asistencia técnica para garantizar que disfrutes al máximo de tus dispositivos.',
  },
  {
    name: 'Todo en tecnología',
    description:
      'Nuestro compromiso es brindarte las soluciones tecnológicas más avanzadas y las mejores marcas del mercado.',
  },
];

export default function FeatureSection() {
  return (
    <div className='bg-gradient-to-t from-white to-[#ebfcff] py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          <div className='mb-36'>
            <h2 className='text-base font-semibold leading-7 text-[#5ECDCD]'>
              Todo lo que necesitas
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              En tu lugar de confianza
            </p>
            <p className='mt-6 text-base leading-7 text-gray-600 flex items-center'>
              <svg
                className='w-8 h-8 mr-2'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M12 21.25C11.853 21.2514 11.7093 21.2059 11.59 21.12C11.29 20.93 4.25 16.2 4.25 10.45C4.25 8.39452 5.06652 6.42328 6.51992 4.96987C7.97333 3.51647 9.94457 2.69995 12 2.69995C14.0554 2.69995 16.0267 3.51647 17.4801 4.96987C18.9335 6.42328 19.75 8.39452 19.75 10.45C19.75 16.2 12.75 20.93 12.41 21.12C12.2907 21.2059 12.147 21.2514 12 21.25ZM12 4.24995C10.3494 4.24463 8.7642 4.89454 7.59238 6.05699C6.42056 7.21943 5.75794 8.79939 5.75 10.45C5.75 14.66 10.54 18.51 12 19.58C13.46 18.51 18.25 14.66 18.25 10.45C18.2421 8.79939 17.5794 7.21943 16.4076 6.05699C15.2358 4.89454 13.6506 4.24463 12 4.24995Z'></path>{' '}
                <path d='M12 12.75C11.4561 12.75 10.9244 12.5887 10.4722 12.2865C10.0199 11.9844 9.66747 11.5549 9.45933 11.0524C9.25119 10.5499 9.19673 9.99695 9.30284 9.4635C9.40895 8.93006 9.67086 8.44005 10.0555 8.05546C10.4401 7.67086 10.9301 7.40895 11.4635 7.30284C11.997 7.19673 12.5499 7.25119 13.0524 7.45933C13.5549 7.66747 13.9844 8.01995 14.2865 8.47218C14.5887 8.92442 14.75 9.4561 14.75 10C14.75 10.7293 14.4603 11.4288 13.9445 11.9445C13.4288 12.4603 12.7293 12.75 12 12.75ZM12 8.75C11.7528 8.75 11.5111 8.82331 11.3055 8.96066C11.1 9.09802 10.9398 9.29324 10.8452 9.52165C10.7505 9.75005 10.7258 10.0014 10.774 10.2439C10.8223 10.4863 10.9413 10.7091 11.1161 10.8839C11.2909 11.0587 11.5137 11.1778 11.7561 11.226C11.9986 11.2742 12.2499 11.2495 12.4784 11.1549C12.7068 11.0602 12.902 10.9 13.0393 10.6945C13.1767 10.4889 13.25 10.2472 13.25 10C13.25 9.66848 13.1183 9.35054 12.8839 9.11612C12.6495 8.8817 12.3315 8.75 12 8.75Z'></path>
              </svg>
              Calle 30# 30-31 parque principal.
              <br />
              El Carmen de Viboral.
            </p>
            <iframe
              className='rounded-xl mt-6 shadow-md'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.3540107123727!2d-75.3375700250108!3d6.082912793903248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46a27bef112e15%3A0xb460607b0e3a1a2c!2sNanotronics%20El%20Carmen!5e0!3m2!1sen!2sco!4v1729714542812!5m2!1sen!2sco'
              width='100%'
              height='80%'
              style={{ border: '0' }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <dl className='col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16'>
            {features.map((feature, index) => (
              <div key={index} className='relative pl-9'>
                <dt className='font-semibold text-gray-900'>
                  <CheckIcon
                    aria-hidden='true'
                    className='absolute left-0 top-1 h-5 w-5 text-[#5ECDCD]'
                  />
                  {feature.name}
                </dt>
                <dd className='mt-2'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
