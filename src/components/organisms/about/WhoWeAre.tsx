import WhoWeArePillars from './WhoWeArePillars';
import WhoWeAreYearWheel from './WhoWeAreYearWheel';

export default function WhoWeAre() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Text column (Server Component for SEO) */}
          <div>
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Who We <span className="font-medium text-white/60">Are</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Khater Sports was established in <strong className="font-semibold text-white">1987</strong>, specializing in
              different sectors of the sports industry, starting with trading sporting goods with a focus on customer
              satisfaction.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
              The company later rapidly emerged as a leading sports construction company in Egypt, building some of the
              largest stadiums, sporting clubs, and other facilities across the country.
            </p>
            <p className="mt-4 max-w-xl text-lg leading-8 text-white/80">
              Along with its regional outreach, it has also widened its scope of work to include sports consultations,
              sports development, and manufacturing, offering comprehensive, customized sports solutions aiming to create
              an attractive environment for people to play sports and lead a healthier lifestyle, ultimately improving the
              community&apos;s well-being.
            </p>

            <WhoWeArePillars />
          </div>

          {/* Year wheel */}
          <WhoWeAreYearWheel />
        </div>
      </div>
    </section>
  );
}
