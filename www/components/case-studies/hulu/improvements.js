import Rings from './svg/rings';

const Improvements = () => (
  <section>
    <img src="/static/svg/desktop.svg" className="tablet" alt="Tablet" />

    <div className="content" id="improvements">
      <h4>Technical Improvements</h4>

      <h2>TODO Technical Improvements (SEO)</h2>

      <p>
        A critical requirement for Hulu was{' '}
        <a href="https://nextjs.org/features/server-side-rendering">
          server-side rendering
        </a>
        . With data coming from many sources and a fundamental need for SEO,
        server-side rendering was a must. With other frameworks,
        server-rendering pages with complex data dependencies is difficult and
        error prone, if not impossible. Next.js however made the process
        straightforward.
      </p>

      <div className="quote">
        <p>
          “[Server rendering] was as easy as moving data fetching from one spot
          to another. Next.js dealt with the underlying client hydration, while
          giving us a single abstraction to handle our data fetching logic.”
        </p>
        <span>— Zack Tanner</span>
      </div>

      <p>
        Even when issues arose, Zack found that error tracing with
        server-rendered pages was far superior compared to any other solution
        he'd tried. By acting as a unified tool for managing both client and
        server-side rendering, Next.js provides amazing developer experience.
      </p>

      <p>
        Finally, by using the CSS-in-JS solution that Next.js provides by
        default, Zack and team were able to implement optimized styles that were
        code-split automatically. This meant each page would load only the CSS
        it needed, keeping page-size small without compromising on on
        functionality. The Hulu teams also extended these defaults using
        sanctioned <code>next-plugins</code>, enhancing their setup to support
        existing global Sass files with minimal overhead.
      </p>
    </div>

    <div className="img-container">
      <div className="rings-container">
        <Rings />
      </div>
      <img
        src="/static/images/case-studies/hulu/engineers.jpg"
        alt="Hulu engineers working together"
        className="img-engineers"
      />
    </div>

    <div className="content">
      <h4>Organizational Improvements</h4>

      <h2>One Framework for Everyone</h2>

      <p>
        With the migration complete, a large amount of technical debt had
        vanished, but another powerful benefit arose. The frontend teams at Hulu
        were unified around a single platform, making it easier for developers
        to be instantly productive no matter which codebase they were in. Zack
        confirms, “devs would come and go and switch teams, but everyone
        understands Next. Everyone is on the same page.” The number of
        operational wins Hulu earned were on par with the technical ones.
      </p>
    </div>

    <div className="corner-gradient" />
    <style jsx>
      {`
        .tablet {
          max-width: 1600px;
          width: 80%;
          margin: 7rem 0 0;
        }

        section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          overflow: hidden;
        }

        section::before {
          content: '';
          top: 36rem;
          width: 100%;
          height: 100%;
          position: absolute;
          background: linear-gradient(135deg, transparent 50%, #1c1c1c 50%);
        }

        h4 {
          color: #aaa;
        }

        p {
          max-width: 35rem;
          margin: 1rem 0;
        }

        a {
          color: #000;
          text-decoration: underline;
        }

        .img-engineers {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 56rem;
          margin: 0 auto;
          border-radius: 8px;
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25),
            0 18px 36px -18px rgba(0, 0, 0, 0.3),
            0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        }

        .img-container {
          position: relative;
          padding: 0 2rem;
          margin: 7.5rem 0;
        }

        .rings-container {
          position: absolute;
          z-index: 1;
          top: -10rem;
          right: -11rem;
        }

        .rings-container > :global(svg) {
          position: relative;
          z-index: 0;
          width: 100%;
        }

        .content:first-of-type {
          padding: 8rem 2rem 0 2rem;
          color: #000;
        }

        .content {
          z-index: 1;
        }

        .quote {
          margin: 4rem 0;
        }

        .quote p {
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 2rem;
          font-style: italic;
          margin: 0 0 1.5rem 0;
        }

        .quote span {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.4);
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        @media screen and (max-width: 1080px) {
          .content:first-of-type {
            padding: 8rem 2rem 0rem 2rem;
          }
          .rings-container {
            transform: scale(0.8);
          }
        }

        @media screen and (max-width: 640px) {
          section::before {
            top: 34rem;
            background: linear-gradient(160deg, transparent 50%, #1c1c1c 50%);
          }
          section {
            align-items: flex-start;
          }
          .tablet {
            width: 100%;
          }
          .img-engineers {
            width: 100%;
          }
          .quote {
            margin: 3.5rem 0;
          }
          .rings-container {
            width: 100vw;
            top: -14rem;
            right: -8rem;
          }
          .rings-container > :global(svg) {
            transform: scale(1);
          }
        }
        @media screen and (max-width: 430px) {
          section::before {
            top: 40rem;
          }
        }
        @media screen and (min-width: 1200px) {
          .content:first-of-type {
            padding: 8rem 2rem 8rem 2rem;
          }
        }
        @media screen and (min-width: 1800px) {
          section::before {
            top: 48rem;
          }
        }
      `}
    </style>
  </section>
);

export default Improvements;