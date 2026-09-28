"use client";

import { useId, useState } from "react";
import { pricingTiers } from "@/lib/site-data";
import { bookingLinkProps } from "@/lib/site-config";

const growthPlan = pricingTiers.find((tier) => tier.slug === "growth")!;

const cad = new Intl.NumberFormat("en-CA", { maximumFractionDigits: 0 });
const formatCad = (value: number) => `C$${cad.format(Math.round(value))}`;

type FieldProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  sliderMax: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
};

function CalculatorField({
  label,
  value,
  onChange,
  sliderMax,
  max,
  step,
  prefix,
  suffix,
}: FieldProps) {
  const id = useId();
  const clamp = (n: number) => Math.min(max, Math.max(0, n));

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-cream/85">
          {label}
        </label>
        <div className="flex shrink-0 items-center rounded-lg border border-white/10 bg-navy-900 px-3 focus-within:border-gold-500">
          {prefix && <span className="text-sm text-cream/50">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={0}
            max={max}
            step={step}
            value={Number.isFinite(value) ? value : 0}
            onChange={(e) => onChange(clamp(Number(e.target.value) || 0))}
            className="w-20 bg-transparent py-2 text-right text-sm font-semibold text-cream outline-none sm:w-24"
          />
          {suffix && <span className="pl-1 text-sm text-cream/50">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        min={0}
        max={sliderMax}
        step={step}
        value={Math.min(value, sliderMax)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-gold-500"
      />
    </div>
  );
}

export default function RoiCalculator() {
  const [leads, setLeads] = useState(100);
  const [missedPct, setMissedPct] = useState(30);
  const [clientValue, setClientValue] = useState(2000);
  const [closePct, setClosePct] = useState(10);

  const leadsLost = leads * (missedPct / 100);
  const revenueLostMonthly = leadsLost * (closePct / 100) * clientValue;
  const revenueLostYearly = revenueLostMonthly * 12;
  const planCost = growthPlan.monthlyPrice;

  return (
    <section id="roi-calculator" className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            ROI <span className="text-gold-500">Calculator</span>
          </h2>
          <p className="mt-4 text-cream/70">
            See how much revenue slow or missed responses could be costing
            your business each month.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-7 rounded-xl border border-white/10 bg-navy-950 p-6 sm:p-8">
            <CalculatorField
              label="Leads / calls per month"
              value={leads}
              onChange={setLeads}
              sliderMax={1000}
              max={100000}
              step={10}
            />
            <CalculatorField
              label="Leads missed or answered late"
              value={missedPct}
              onChange={setMissedPct}
              sliderMax={100}
              max={100}
              step={1}
              suffix="%"
            />
            <CalculatorField
              label="Average value of one client"
              value={clientValue}
              onChange={setClientValue}
              sliderMax={20000}
              max={1000000}
              step={100}
              prefix="C$"
            />
            <CalculatorField
              label="Current closing rate"
              value={closePct}
              onChange={setClosePct}
              sliderMax={100}
              max={100}
              step={1}
              suffix="%"
            />
          </div>

          <div
            aria-live="polite"
            className="flex flex-col rounded-xl border border-gold-500/40 bg-navy-950 p-6 ring-1 ring-gold-500/20 sm:p-8"
          >
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium tracking-wide text-cream/55 uppercase">
                  Leads lost per month
                </dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-cream">
                  {cad.format(Math.round(leadsLost))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium tracking-wide text-cream/55 uppercase">
                  Revenue lost per month
                </dt>
                <dd className="mt-1 font-display text-3xl font-semibold text-amber-500">
                  {formatCad(revenueLostMonthly)}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium tracking-wide text-cream/55 uppercase">
                  Yearly revenue lost
                </dt>
                <dd className="mt-1 font-display text-4xl font-semibold text-amber-500">
                  {formatCad(revenueLostYearly)}
                </dd>
              </div>
            </dl>

            <div className="mt-6 rounded-lg border border-white/10 bg-navy-900 p-5">
              <p className="text-sm text-cream/75">
                GoEasyAI {growthPlan.name} plan:{" "}
                <span className="font-semibold text-cream">
                  C${planCost}/month
                </span>
              </p>
            </div>

            <a
              {...bookingLinkProps}
              className="mt-6 rounded-lg bg-gold-500 px-6 py-3.5 text-center text-sm font-semibold text-navy-950 transition-transform hover:scale-105 hover:bg-gold-400"
            >
              Book Your Free Strategy Session
            </a>
            <p className="mt-3 text-center text-xs text-cream/50">
              Estimates for illustration only. Actual results vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
