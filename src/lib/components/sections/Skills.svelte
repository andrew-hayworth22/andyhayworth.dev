<script>
	import { frameworks, languages, tools } from "$lib/data/skills";
	import SkillBox from "$lib/components/ui/SkillBox.svelte";
	import Section from "$lib/components/ui/Section.svelte";
	import Certifications from "./Certifications.svelte";

</script>
<Section id="skills" number="04." title="skills">
	<div class="grid grid-cols-3 gap-5 max-[820px]:grid-cols-2 max-[720px]:grid-cols-1">
		<SkillBox title="# languages" items={languages} />
		<SkillBox title="# frameworks" items={frameworks} />
		<SkillBox title="# other tools & goodies" items={tools} />
	</div>
	<Certifications />
</Section>
