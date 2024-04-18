import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import Link from "next/link";
import Image from "next/legacy/image";
import Quote from "../public/trelli/quote-summary.png";
import Award from "../public/trelli/innovation.jpg";
import Tradeshow from "../public/trelli/tradeshow.jpg";
import { handleScroll } from ".";

import Calendar from "../public/planter/calendar.png";
import Cart from "../public/planter/cart.png";
import projectData from "../data/projects.json";

import {
  ProjectDetailsIntroWrapper,
  ProjectDetailsWrapper,
  ProjectDetailsHeader,
  ProjectSnapshotWrapper,
  SnapshotHeader,
  SnapshotSection,
  SnapshotValue,
  VisitWebsiteLink,
  NextButtonWrapper,
  ProjectImagesWrapper,
  ProjectDetailsHeaderWrapper,
  ProjectDetailsSection,
  Swatch,
  SwatchColor,
  SubSection,
  ProjectDetailsBackgroundSection,
  Tool,
  StackWrapper,
} from "../styles/PageDetailsStyle";

import { StyledLink } from "../components/ProjectPreviewCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Trelli = () => {
  const [expandPreview, setExpandPreview] = useState("");
  const handleExpand = (
    event: React.MouseEvent<HTMLElement>,
    fileName: string
  ) => {
    event.stopPropagation();
    setExpandPreview(fileName);
  };

  const trelliProjectData = projectData.projects.find(
    (project) => project.name === "Trelli"
  );
  return (
    <ProjectDetailsWrapper>
      <ProjectDetailsHeaderWrapper>
        <ProjectDetailsHeader>TRELLI</ProjectDetailsHeader>

        <VisitWebsiteLink>
          <Button text={"VISIT THE WEBSITE"} to={"https://trelli.co.nz"} />
        </VisitWebsiteLink>
      </ProjectDetailsHeaderWrapper>
      <ProjectDetailsIntroWrapper>
        <ProjectSnapshotWrapper>
          <SnapshotSection>
            <SnapshotHeader>ROLE</SnapshotHeader>
            <SnapshotValue>Frontend</SnapshotValue>
            <SnapshotValue>Bit of Backend</SnapshotValue>
            <SnapshotValue>Dash of Design</SnapshotValue>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>CLIENT</SnapshotHeader>
            <a href="https://www.genia.co.nz/" target="_blank">
              Genia
            </a>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>TEAMMATES</SnapshotHeader>
            <a href="https://thomaspearson.me/" target="_blank">
              Thomas Pearson
            </a>
            <a
              href="https://www.linkedin.com/in/jesse-drummond"
              target="_blank"
            >
              Jesse Drummond
            </a>
          </SnapshotSection>
          <SnapshotSection>
            <SnapshotHeader>DATE</SnapshotHeader>
            <SnapshotValue>Early 2020</SnapshotValue>
          </SnapshotSection>
        </ProjectSnapshotWrapper>
        <ProjectDetailsBackgroundSection>
          <h2>BACKGROUND</h2>
          <p>
            Genia's sales department needed to present their new line of custom
            Trellis, Panels, and Gates to hardware stores across New Zealand. An
            idea emerged to streamline the process by enabling instant quotes
            for these products, eliminating the need for sales reps to call the
            company every time.
          </p>
          <p>
            The challenge was to develop a prototype before the presentation in
            just two working days. Thomas and I, handling backend and frontend
            respectively, completed the task within two iconic 11-hour shifts.
          </p>
          <p>
            Since its launch, the app has garnered positive feedback from
            hardware stores across NZ, driving sales for the Motueka Pickets
            brand. In 2022, I was honored with Genia's Innovation Award for this
            contribution.
          </p>
        </ProjectDetailsBackgroundSection>
      </ProjectDetailsIntroWrapper>

      <Swatch>
        {trelliProjectData?.swatch?.map((color) => (
          <SwatchColor $color={color} />
        ))}
      </Swatch>

      <ProjectDetailsSection>
        <h2>HOW IT WORKS</h2>
        <p>
          Once a customer or sales rep selects their custom Trellis,
          Pickets/Panels, and/or Gates, they submit their e-mail where our
          backend will calculate the price, generate a spec-sheet, and send PDFs
          to the sales team, manufacturing team, and the customer.
        </p>
      </ProjectDetailsSection>

      <ProjectImagesWrapper>
        <Image
          priority
          className="image"
          onClick={(e: any) => handleExpand(e, Quote.src)}
          src={Quote.src}
          alt="trelli-quote"
          aria-label="Quote"
          width={776}
          height={653}
        />
        <Image
          priority
          className="image"
          onClick={(e: any) => handleExpand(e, Tradeshow.src)}
          src={Tradeshow.src}
          aria-label="Tradeshow"
          alt="trelli-tradeshow"
          width={1131}
          height={751}
        />
      </ProjectImagesWrapper>

      <ProjectDetailsSection>
        <h2>THE STACK</h2>
        <StackWrapper>
          {trelliProjectData?.tools?.map((tool) => (
            <Tool>{tool}</Tool>
          ))}
        </StackWrapper>
      </ProjectDetailsSection>
      <NextButtonWrapper>
        <StyledLink href="/agora" passHref $isLarge>
          NEXT PROJECT
        </StyledLink>
      </NextButtonWrapper>
      <Lightbox
        open={!!expandPreview}
        close={() => setExpandPreview("")}
        slides={[{ src: expandPreview, width: 1000 }]}
        carousel={{ finite: true }}
        styles={{ container: { backgroundColor: "rgb(0 0 0 / 80%)" } }}
        controller={{ closeOnBackdropClick: true }}
        render={{ buttonNext: () => null, buttonPrev: () => null }}
      />
    </ProjectDetailsWrapper>
  );
};

export default Trelli;

// return (
//   <PageDetailsWrapper>
//     <div className="name-container">
//       <h1 className="name">TRELLI</h1>
//       <ArrowStyle onClick={() => handleScroll("start")} />
//     </div>
//     <div className="project-container" id="start">
//       <section className="intro">
//         <h1 className="header">ABOUT THE PROJECT</h1>
//         <div className="snapshot">
//           <div className="tagline">
//             An award-winning app that provides instant quotes for custom
//             Trellis products.
//           </div>
//           <div className="container">
//             <div className="description-container">
//               <div className="description">
//                 Genia&apos;s sales department needed to give a presentation to
//                 hardware stores throughout New Zealand to launch their new
//                 line of custom Trellis, Panels, and Gates. An idea was pitched
//                 that would allow these hardware retail stores to receive
//                 instant quotes for these products and make their jobs easier.
//                 Prior to this, a sales rep would have to manually call and ask
//                 our company for a quote. The challenge was to finish a
//                 prototype before the presentation in 2 working days. Thomas
//                 (backend) and I ended up getting it in done in two iconic 11
//                 hour shifts. Since then, the app has evolved and continues to
//                 receive rave reviews from hardware stores throughout NZ,
//                 increasing sales for the Motueka Pickets brand. In 2022, I
//                 received Genia&apos;s Innovation Award for this app which
//                 contributes towards the goal of continuous improvement and
//                 innovation.
//               </div>
//               <div className="visit">
//                 <Button
//                   text={"VISIT THE WEBSITE"}
//                   to={"https://trelli.co.nz/"}
//                 />
//               </div>
//             </div>
//             <div className="notes">
//               <div className="note-container">
//                 <div className="label">ROLE</div>
//                 <div className="role">Full Stack</div>
//                 <div className="role">Some Design</div>
//               </div>
//               <div className="note-container">
//                 <div className="label client">CLIENT</div>
//                 <div className="client">
//                   <Link href="https://www.genia.co.nz/">Genia</Link>
//                 </div>
//               </div>
//               <div className="note-container">
//                 <div className="label date">DATE</div>
//                 <div className="date">Early 2020 - Current</div>
//               </div>
//               <div className="note-container">
//                 <div className="label client">Teammates</div>
//                 <Link href="https://thomaspearson.me/">Thomas Pearson</Link>
//                 <Link href="https://www.linkedin.com/in/jesse-drummond">
//                   Jesse Drummond
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className="image-container">
//         <Image
//           priority
//           className="image"
//           src={Quote}
//           alt="trelli-quote"
//           aria-label="Quote"
//           width={776}
//           height={653}
//           layout={"responsive"}
//         />
//         <div className="label">
//           A customer or sales rep selected two products with these custom
//           specs.
//         </div>
//       </div>
//       <div className="image-container">
//         <Image
//           priority
//           alt="trelli-tradeshow"
//           className="image"
//           src={Tradeshow}
//           aria-label="Tradeshow"
//           width={1131}
//           height={751}
//           layout={"responsive"}
//         />
//         <div className="label">
//           Trelli on the bottom right during a tradeshow in Auckland.
//         </div>
//       </div>
//       <div className="image-container">
//         <Image
//           priority
//           className="image"
//           src={Award}
//           alt="trelli-award"
//           aria-label="Award Image"
//           width={1200}
//           height={900}
//           layout={"responsive"}
//         />
//         <div className="label">
//           My coworkers and I receiving the first ever Innovation Award at the
//           company-wide meeting in Motueka. It was a nice surprise. Had I known
//           prior I probably would not have worn my Biggie Smalls tee in front
//           of 100+ people with a Microsoft Teams blanket fort background
//           (pictured on the two screens live from Wellington, NZ).
//         </div>
//       </div>
//       <section className="technical">
//         <h1 className="header">HOW IT WORKS</h1>
//         <div className="content">
//           <p>
//             Once a customer or sales rep selects their custom Trellis,
//             Pickets/Panels, and/or Gates, they submit their e-mail where our
//             backend will calculate the price, generate a spec-sheet, and send
//             PDFs to the sales team, manufacturing team, and the customer.
//           </p>
//         </div>
//       </section>
//       <section className="learnings">
//         <h1 className="header">WHAT I LEARNED</h1>
//         <ListStyle>
//           <ul>
//             <li>
//               I am able to crank out an app for demo-purposes in under 20
//               hours. While quick, the code I produced was not carefully
//               thought of prior. Thus, architecturally, the app was built on
//               shaky grounds. As the app became more widely adopted, we
//               continued to build on-top of the codebase until realizing that
//               adding simple features was harder than it should be. This
//               resulted in a lengthy architectural refactor down the line.
//             </li>
//             <li>
//               It is very easy to go overboard with animations. During
//               development, I had to take a step back and realize Trelli is a
//               simple calculator-like app for sales people and DIY renovation
//               folk. Another 10 valuable hours of fancy animations would not
//               necessarily produce a big ROI. The full fledged consumer app
//               version will be made in the future and so maybe then would
//               slicker animations suffice. Know your audience!
//             </li>
//           </ul>
//         </ListStyle>
//       </section>
//       <section className="actions">
//         <div className="next">
//           <Link href="/genia" passHref>
//             <Button text={"NEXT PROJECT"} />
//           </Link>
//         </div>
//       </section>
//     </div>
//   </PageDetailsWrapper>
// );
