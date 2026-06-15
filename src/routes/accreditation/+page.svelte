<script lang="ts">
  import { ExternalLink, Mail } from 'lucide-svelte';

  interface Props {
    organizationName?: string;
    firstAccreditationYear?: number;
    renewalNumber?: string;
    commentDeadline?: string;
    standardsUrl?: string;
    commentUrl?: string;
    contactEmail?: string;
  }

  let {
    organizationName = 'Wallowa Land Trust',
    firstAccreditationYear = 2016,
    renewalNumber = 'second',
    commentDeadline = 'July 1, 2026',
    standardsUrl = 'https://landtrustaccreditation.org/resources/requirements-manual/',
    commentUrl = 'https://landtrustaccreditation.org/why-accreditation-matters/comment',
    contactEmail = 'info@landtrustaccreditation.org'
  }: Props = $props();
</script>

<div class="mx-auto max-w-4xl px-4 py-8 sm:py-12">
   	<!-- <div class="absolute z-10 h-[300px] w-full bg-white/20 md:h-[40vh] dark:saturate-50"></div> -->
   
	<div class="relative h-[300px] w-full overflow-hidden md:h-[40vh]">
		<enhanced:img
			src="/static/images/RenewalAnnouncement.jpg?w=original;1280;640;320"
			alt="A view of the Buford Grade heading out of Wallowa County. Photo by David Jensen."
			class="h-full w-full object-cover object-top brightness-110 saturate-[1.2] dark:brightness-85"
			fetchpriority="high"
			sizes="(max-width: 640px)  320px,
            (max-width: 1280px) 640px,
            100vw"
		/>
	</div>
  <div class="mb-8 space-y-4 rounded-lg bg-slate-50 p-6 sm:p-8 dark:bg-slate-800/50">
    <h1 class="text-2xl font-semibold text-slate-800 sm:text-3xl dark:text-slate-100">
      We Are Applying to Be Re-Accredited!
    </h1>
    <p class="leading-relaxed text-slate-700 dark:text-slate-300">
      Our first accreditation was achieved in {firstAccreditationYear}. This will be
      our {renewalNumber} renewal. The public comment period is now open.
    </p>
  </div>

  <div class="mb-8 space-y-4">
    <h2 class="text-lg font-medium text-slate-800 dark:text-slate-100">
      Stakeholder Notification / Public Notice
    </h2>
    <p class="leading-relaxed text-slate-700 dark:text-slate-300">
      The land trust accreditation program recognizes land conservation organizations
      that meet national quality standards for protecting important natural places and
      working lands forever. {organizationName} is pleased to announce it is applying
      for accreditation renewal. A public comment period is now open.
    </p>
    <p class="leading-relaxed text-slate-700 dark:text-slate-300">
      The Land Trust Accreditation Commission, an independent program of the Land Trust
      Alliance, conducts an extensive review of each applicant's policies and programs.
      Being accredited means adhering to the most rigorous national standards for
      permanent land conservation and stewardship.
    </p>
    <p class="leading-relaxed text-slate-700 dark:text-slate-300">
      The Commission invites public input and accepts signed, written comments on
      pending applications. Comments must relate to how {organizationName} complies with
      national quality standards. These standards address the ethical and technical
      operation of a land trust. For the full list of standards see
      <a
        href={standardsUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 font-medium text-emerald-700 underline [overflow-wrap:anywhere] hover:text-emerald-600 dark:text-emerald-400"
      >
        the indicator elements
        <ExternalLink class="h-4 w-4" />
      </a>.
    </p>
  </div>

  <div class="rounded-lg border border-slate-200 p-6 sm:p-8 dark:border-slate-700 dark:bg-slate-800/30">
    <h2 class="mb-4 text-lg font-medium text-slate-800 dark:text-slate-100">
      Submit a Comment
    </h2>
    <p class="leading-relaxed text-slate-700 dark:text-slate-300">
      To learn more about the accreditation program and to submit a comment, visit
      <a
        href={commentUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1 font-medium text-emerald-700 underline [overflow-wrap:anywhere] hover:text-emerald-600 dark:text-emerald-400"
      >
        the comment page
        <ExternalLink class="h-4 w-4" />
      </a>, or email your comment to
      <span class="inline-flex items-center gap-1 font-medium text-slate-800 dark:text-slate-100">
        <Mail class="h-4 w-4" />
        {contactEmail}
      </span>.
    </p>

    <address class="my-6 border-l-2 border-slate-200 pl-4 not-italic leading-relaxed text-slate-600 dark:border-slate-600 dark:text-slate-400">
      Comments may also be mailed to:<br /><br />
      Land Trust Accreditation Commission<br />
      Attn: Public Comments<br />
      36 Phila Street, Suite 2<br />
      Saratoga Springs, NY 12866
    </address>

    <p class="rounded-lg bg-slate-50 px-4 py-3 leading-relaxed text-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
      Comments on {organizationName}'s application will be most useful by
      <strong class="text-slate-900 dark:text-slate-100">{commentDeadline}</strong>.
    </p>
  </div>
</div>