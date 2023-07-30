import LayoutContainer from '@/components/Containers';
import Image from 'next/image';
import Intro from '@/components/Intro';
import { ParagraphLarge } from '@/components/Typography';
import MoveAnimation from '@/components/MoveAnimation';

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
      <MoveAnimation direction="left">
        <div className="relative h-[240px] w-[340px] md:h-[420px] md:w-[720px]">
          <Image
            fill
            alt="usa"
            className="object-cover rounded-3xl shadow-2xl"
            src="https://res.cloudinary.com/dctc6iyms/image/upload/v1653993837/samples/landscapes/architecture-signs.jpg"
          />
        </div>
      </MoveAnimation>
    </LayoutContainer>
    <LayoutContainer
      size="large"
      className="md:h-screen bg-gradient-to-t from-white via-red-100/50 to-blue-700/10 flex flex-1 flex-col justify-center items-center text-slate-800">
      <MoveAnimation direction="right" className="inline-flex justify-center items-center">
        <ParagraphLarge font="regular" className="md:w-2/3">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </ParagraphLarge>
      </MoveAnimation>
      <div className="h-20" />
      <MoveAnimation direction="left" className="inline-flex justify-center items-center text-end">
        <ParagraphLarge font="regular" className="md:w-1/2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </ParagraphLarge>
      </MoveAnimation>
    </LayoutContainer>
  </>
);

export default Home;
