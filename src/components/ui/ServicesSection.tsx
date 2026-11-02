"use client";

import { useRegion } from "@/components/RegionProvider";
import { RegionSelector } from "@/components/RegionSelector";
import { formatPackageRange } from "@/lib/pricing";
import { SERVICES, serviceDetailHref, serviceRequestHref, type Service } from "@/lib/services";
import { Button } from "@/components/Button";

export function ServicesSection() {
  const { region } = useRegion();
  const displayRegion = region ?? "US";

  return (
    <section className="bg-bg-main py-14 transition-colors duration-300 sm:py-20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-14">
          <span className="text-caption1 font-bold tracking-wider text-[#2D738D] uppercase">
            OUR SERVICES
          </span>
          <h2 className="text-h2 text-foreground font-bold">Built for Every Stage</h2>
          <p className="text-body2 sm:text-body1 text-text-alt">
            From strategy and websites to automation, our services are designed around your business
            needs.
          </p>

          {/* Currency Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <span className="text-caption2 text-text-dim font-semibold tracking-wider uppercase">
              Display currency:
            </span>
            <RegionSelector compact={false} />
          </div>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service: Service) => {
            const priceRange = formatPackageRange(service.pkgKey, displayRegion);

            return (
              <div
                key={service.slug}
                className="bg-bg-alt border-border-main flex h-full flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-foreground text-2xl font-bold">{service.title}</h3>
                  <p className="text-body2 text-text-alt leading-relaxed">{service.summary}</p>
                  <p className="text-caption1 text-text-dim">
                    <strong className="text-foreground font-semibold">Best for: </strong>
                    {service.bestFor}
                  </p>
                </div>

                <div className="border-border-main my-6 border-t pt-6">
                  <div className="text-caption2 text-text-dim font-bold tracking-wider uppercase">
                    Price range
                  </div>
                  <div className="mt-1 text-2xl font-extrabold text-[#3B9AB8]">{priceRange}</div>
                  <div className="text-caption2 text-text-alt mt-1">
                    Depends on the scope tier you choose
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row lg:flex-col xl:flex-row">
                  <Button
                    href={serviceDetailHref(service)}
                    variant="outline"
                    className="max-w-none! flex-1"
                  >
                    View more
                  </Button>
                  <Button
                    href={serviceRequestHref(service)}
                    variant="primary"
                    className="max-w-none! flex-1"
                  >
                    Request proposal
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
