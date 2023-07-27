import LayoutContainer from '@/components/Containers';
import Image from 'next/image';
import Intro from '@/components/Intro';
import { ParagraphBase } from '@/components/Typography';

const Home = () => (
  <>
    <LayoutContainer
      size="medium"
      className="flex flex-1 flex-col items-center justify-center h-screen text-center">
      <Intro />
    </LayoutContainer>
    <LayoutContainer
      size="large"
      className="h-screen bg-gradient-to-b from-white via-red-100/50 to-blue-700/10 flex flex-1 flex-col justify-center items-center">
      <div className="relative h-[420px] w-[720px]">
        <Image
          fill
          alt="usa"
          className="object-cover rounded-3xl shadow-2xl"
          src="https://res.cloudinary.com/dctc6iyms/image/upload/v1653993837/samples/landscapes/architecture-signs.jpg"
        />
      </div>
    </LayoutContainer>
    <LayoutContainer
      size="large"
      className="h-screen bg-gradient-to-t from-white via-red-100/50 to-blue-700/10 flex flex-1 flex-col justify-center items-center">
      <ParagraphBase font="regular" className="w-1/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </ParagraphBase>
    </LayoutContainer>
  </>
);

export default Home;
