// --- HTML Content for Each Step ---
const step1HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text lays the foundation for recovery with Step One, emphasizing complete surrender.</p>
                <ul>
                    <li><span class="highlight">Powerlessness:</span> This means an inability to control drug use, regardless of consequences or sincere desires to stop. It's an admission that addiction is stronger than willpower. The obsession and compulsion are key aspects.</li>
                    <li><span class="highlight">Unmanageability:</span> This refers to the chaos addiction brings to all areas of life – physical, mental, emotional, spiritual, financial, and relational. It's not just about external circumstances but internal turmoil.</li>
                    <li><span class="highlight">Nature of Addiction:</span> Addiction is presented as a disease – progressive, incurable (but arrestable), and potentially fatal. It's not a moral failing.</li>
                    <li><span class="highlight">Identification as an Addict:</span> The text encourages honest self-assessment to see if the description of an addict fits. This identification is crucial for accepting help.</li>
                    <li><span class="highlight">Hitting Bottom:</span> For many, Step One comes after reaching a personal "bottom," a point of desperation where the pain of using outweighs any perceived benefits.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text stresses that this admission is the first step towards freedom and the beginning of hope.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" explores the depth and implications of Step One.</p>
                <ul>
                    <li><span class="highlight">Two-Fold Admission:</span> The step has two distinct but related parts: powerlessness over addiction AND the unmanageability of life. Both must be admitted.</li>
                    <li><span class="highlight">Reservations:</span> This book discusses common reservations addicts have about admitting Step One fully (e.g., "I can control it next time," "My life isn't THAT bad"). Overcoming these is key.</li>
                    <li><span class="highlight">The "We":</span> The use of "We" signifies a shared experience and the beginning of fellowship. We are not alone in this.</li>
                    <li><span class="highlight">Surrender as Liberation:</span> Surrender in Step One is not defeat but liberation from the struggle of trying to control the uncontrollable. It opens the door to a new way of life.</li>
                    <li><span class="highlight">Beyond Drugs:</span> While drugs are the initial focus, the principles of powerlessness and unmanageability can apply to other compulsive behaviors or aspects of the addictive personality.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights that a thorough and honest First Step is the bedrock upon which all other recovery is built.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer practical questions for a personal understanding of Step One.</p>
                <ul>
                    <li><span class="highlight">Personal Examples of Powerlessness:</span> Guides prompt reflection on specific instances where one tried to control drug use and failed, or where drug use led to unintended negative consequences.</li>
                    <li><span class="highlight">Evidence of Unmanageability:</span> Questions help individuals list concrete ways their lives became unmanageable in various areas (relationships, work, finances, health, emotions).</li>
                    <li><span class="highlight">Denial and Rationalization:</span> The guides encourage examination of past denial systems and rationalizations used to avoid facing the truth of addiction.</li>
                    <li><span class="highlight">The "Gift of Desperation":</span> Reflection on what brought the individual to NA and to the point of being willing to admit Step One.</li>
                    <li><span class="highlight">What "Addiction" Means Personally:</span> Exploring one's own understanding and experience of addiction, beyond just the substances used.</li>
                </ul>
                <p class="mt-3 emphasis">The guides aim to make Step One a deeply personal admission, not just an intellectual exercise.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step One</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step One is the cornerstone of the Narcotics Anonymous program. It's the essential starting point from which all recovery flows. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Honesty and Admission</h4>
                    <p>The core of Step One is rigorous honesty with oneself. It requires admitting the truth about the <span class="highlight">powerlessness</span> over the disease of addiction and the resulting <span class="highlight">unmanageability</span> of life. This is often a painful but necessary admission.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Surrender and Acceptance</h4>
                    <p>This step involves surrendering the illusion of control. It's an acceptance of addiction as a disease that cannot be overcome by willpower alone. This surrender is not giving up, but <span class="highlight">giving in to the recovery process</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. The End of Isolation</h4>
                    <p>By admitting "We," individuals begin to break free from the isolation of addiction. They realize they are not unique in their struggles and that <span class="highlight">help and understanding are available</span> within the fellowship.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Foundation for Hope</h4>
                    <p>While admitting defeat might seem negative, Step One is actually the <span class="highlight">foundation for hope</span>. By acknowledging the problem accurately, the door opens to a solution offered by the subsequent steps.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Identification with the Disease</h4>
                    <p>Understanding and identifying with the concept of addiction as a disease helps to reduce shame and self-blame, allowing for a more <span class="highlight">compassionate approach to self and recovery</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Motivation for Change</h4>
                    <p>The pain and desperation recognized through exploring unmanageability often provide the <span class="highlight">strong motivation needed to embrace the NA program</span> and make profound life changes.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step One is the courageous first act of turning towards recovery. Without a complete and honest First Step, the rest of the program may have little foundation upon which to build.
            </p>
        </div>
    </div>
</div>
`;

const step2HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Two as the introduction of hope and the possibility of change through a Higher Power.</p>
                <ul>
                    <li><span class="highlight">"Came to Believe":</span> This is a process, not an instant event. It suggests a gradual opening of the mind to the possibility of help from an outside source.</li>
                    <li><span class="highlight">A Power Greater Than Ourselves:</span> This Power is not strictly defined. It can be God as one understands Him, the NA group, spiritual principles, or any power perceived as greater than one's own. The emphasis is on personal understanding.</li>
                    <li><span class="highlight">Restoration to Sanity:</span> Insanity in addiction is often defined as repeating the same behaviors (using drugs) expecting different results, or the obsession and compulsion itself. Step Two offers hope for a return to rational thought and behavior.</li>
                    <li><span class="highlight">Open-mindedness:</span> A key requirement for Step Two is open-mindedness, a willingness to consider new ideas, especially if old beliefs haven't worked.</li>
                    <li><span class="highlight">Hope:</span> For many, Step Two is where genuine hope for recovery begins, moving beyond the despair of Step One.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes that one doesn't need to fully understand or define this Power initially, only to become willing to believe in its possibility.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" elaborates on the journey of coming to believe.</p>
                <ul>
                    <li><span class="highlight">Addressing Skepticism and Doubt:</span> This text acknowledges the common struggles with belief, especially for those who are agnostic or atheistic. It suggests that witnessing recovery in others can be a starting point for belief.</li>
                    <li><span class="highlight">The Group as a Higher Power:</span> For many newcomers, the collective wisdom and support of the NA group can serve as an initial Power greater than themselves.</li>
                    <li><span class="highlight">Sanity Defined:</span> Sanity is described not just as the absence of drug-induced insanity, but as living by spiritual principles, making healthy choices, and experiencing emotional balance.</li>
                    <li><span class="highlight">Personal Experience:</span> Belief often grows from personal experience – seeing the program work in one's own life or the lives of others.</li>
                    <li><span class="highlight">Willingness to Experiment:</span> The book encourages a willingness to "act as if" one believes, or to experiment with the idea of a Higher Power.</li>
                </ul>
                <p class="mt-3 emphasis">This text underscores that Step Two is about finding a source of strength beyond oneself and developing a trusting relationship with it.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides facilitate a personal exploration of belief and sanity.</p>
                <ul>
                    <li><span class="highlight">Defining Insanity Personally:</span> Questions prompt reflection on personal experiences of insanity during active addiction (e.g., irrational thoughts, compulsive actions, self-destructive patterns).</li>
                    <li><span class="highlight">Exploring Concepts of a Higher Power:</span> The guides encourage individuals to explore their own ideas, past beliefs, or new possibilities regarding a Power greater than themselves, free from external imposition.</li>
                    <li><span class="highlight">Identifying Barriers to Belief:</span> Members are asked to consider what might be blocking their ability to believe (e.g., past negative experiences with religion, intellectual pride, fear).</li>
                    <li><span class="highlight">Evidence of a Higher Power at Work:</span> Prompts to look for small signs or experiences that might suggest the presence or possibility of a benevolent Power.</li>
                    <li><span class="highlight">What "Restored to Sanity" Would Look Like:</span> Encouraging visualization of a life free from addictive insanity, guided by healthier thinking.</li>
                </ul>
                <p class="mt-3 emphasis">The guides help to make the abstract concepts of Step Two tangible and personally relevant.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Two</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Two marks a crucial shift from the admission of defeat in Step One to the dawn of hope. It is the bridge to developing a spiritual foundation for recovery. Core themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. The Introduction of Hope</h4>
                    <p>After admitting powerlessness, Step Two introduces the <span class="highlight">vital element of hope</span>. It suggests that there is a solution and that change is possible, countering the despair of active addiction.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Open-mindedness and Willingness</h4>
                    <p>This step requires a degree of <span class="highlight">open-mindedness</span> to explore spiritual concepts, perhaps for the first time, or in a new way. A willingness to suspend disbelief is often the starting point.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Personalized Spirituality</h4>
                    <p>NA emphasizes that each individual can define their <span class="highlight">Power greater than themselves</span> in a way that is meaningful to them. There is no prescribed dogma, allowing for a deeply personal spiritual connection.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. The Promise of Sanity</h4>
                    <p>Step Two offers the promise of <span class="highlight">restoration to sanity</span> – a return to rational thinking, emotional stability, and freedom from the obsessive and compulsive behaviors of addiction.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. A Gradual Process of Belief</h4>
                    <p>The phrase "came to believe" indicates that belief is often not an instantaneous revelation but a <span class="highlight">gradual awakening or dawning</span> that develops through experience and continued engagement with the program.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Moving Beyond Self-Reliance</h4>
                    <p>Having admitted self-reliance failed in Step One, Step Two encourages looking <span class="highlight">outside of oneself for strength and guidance</span>. This is a fundamental shift in perspective for many addicts.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Two is the beginning of a spiritual journey. It opens the door to a source of power sufficient to overcome addiction and transform a life previously characterized by insanity into one of purpose and peace.
            </p>
        </div>
    </div>
</div>
`;

const step3HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text describes Step Three as a crucial decision point, building on the hope found in Step Two.</p>
                <ul>
                    <li><span class="highlight">Making a Decision:</span> This is an act of will, a conscious choice. It's the first direct action taken towards aligning with a Higher Power.</li>
                    <li><span class="highlight">"Our Will and Our Lives":</span> "Will" refers to our thinking, desires, and decision-making. "Lives" refers to our actions and circumstances. The decision encompasses all aspects of self.</li>
                    <li><span class="highlight">"To the Care Of":</span> This implies trust and reliance. It's not about becoming a puppet, but about trusting that a loving Higher Power has our best interests at heart.</li>
                    <li><span class="highlight">"God As We Understood Him":</span> Reinforces the personal nature of one's Higher Power. The decision is made to the Power one has come to believe in, however defined.</li>
                    <li><span class="highlight">Letting Go of Self-Will:</span> A core element is recognizing the destructiveness of self-will run riot and choosing to seek guidance from a more benevolent Power.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes this decision as a cornerstone for ongoing recovery, offering freedom from the bondage of self.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" explores the practicalities and implications of this decision.</p>
                <ul>
                    <li><span class="highlight">What the Decision Entails:</span> It means choosing to live by spiritual principles, seeking guidance, and trusting the outcome, even when it's difficult or unclear.</li>
                    <li><span class="highlight">Daily Reprieve:</span> The decision is not a one-time fix but needs to be renewed, often daily. It's a commitment to a new way of living.</li>
                    <li><span class="highlight">Action Follows Decision:</span> Step Three is a decision, and subsequent steps provide the actions to live out this decision.</li>
                    <li><span class="highlight">Overcoming Fear and Resistance:</span> The book acknowledges the fear of letting go of control and trusting an unseen Power. Working through this resistance is part of the step.</li>
                    <li><span class="highlight">The Third Step Prayer:</span> Many find a formal or informal prayer helpful in making this decision, expressing their willingness to surrender.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights Step Three as an ongoing commitment that transforms our perspective and actions.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides help personalize the decision-making process of Step Three.</p>
                <ul>
                    <li><span class="highlight">Understanding "Will" vs. "God's Will":</span> Questions explore personal experiences with self-will and its consequences, versus the concept of a Higher Power's guidance.</li>
                    <li><span class="highlight">What "Care" Means:</span> Prompts to define what it means to be in the "care of" a Higher Power – what qualities (love, guidance, strength) one attributes to this care.</li>
                    <li><span class="highlight">Identifying Specific Areas to Surrender:</span> Encourages pinpointing areas of life (e.g., relationships, fears, ambitions) where turning over will and life feels most needed or most difficult.</li>
                    <li><span class="highlight">Practical Application:</span> How can this decision be put into practice daily? What actions demonstrate this surrender?</li>
                    <li><span class="highlight">Making the Decision Concrete:</span> Some find it helpful to write down their decision or share it with a sponsor to make it more tangible.</li>
                </ul>
                <p class="mt-3 emphasis">The guides aim to move Step Three from an abstract idea to a concrete, lived experience.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Three</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Three is the first major decision point in the NA program, representing a commitment to a spiritually guided life. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. The Power of Decision</h4>
                    <p>This step emphasizes that recovery involves <span class="highlight">conscious choices and commitments</span>. Making a decision is an empowering act that sets the direction for future actions and a new way of life.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Surrender and Trust</h4>
                    <p>At its heart, Step Three is about <span class="highlight">surrendering self-will and trusting</span> in the care of a Higher Power. This involves letting go of the need to control everything and believing that a benevolent Power can guide us better than our own flawed judgment.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Personal Responsibility in Spirituality</h4>
                    <p>The phrase "as we understood Him" underscores that the individual is responsible for developing their <span class="highlight">own unique and personal relationship with their Higher Power</span>. This step respects individual spiritual paths.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. A Commitment to Action</h4>
                    <p>While Step Three is a decision, it implies a commitment to ongoing action. The remaining steps provide the framework for <span class="highlight">living out this decision on a daily basis</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Finding Direction and Purpose</h4>
                    <p>By turning our will and lives over, we open ourselves to finding a <span class="highlight">new sense of direction and purpose</span> that was often lost in active addiction. It's about aligning with principles that promote growth and well-being.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Freedom from Self-Obsession</h4>
                    <p>A significant outcome of Step Three is the beginning of freedom from the <span class="highlight">crippling effects of self-centeredness and self-will</span>, which are often at the root of addictive behavior.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Three is a pivotal act of faith and commitment. It establishes the relationship with a Higher Power as the central guiding force in recovery, paving the way for profound change and a life of greater peace and purpose.
            </p>
        </div>
    </div>
</div>
`;

const step4HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Four as a courageous look inward to identify the patterns and defects that fueled addiction.</p>
                <ul>
                    <li><span class="highlight">"Searching and Fearless":</span> This implies a thorough, honest, and brave examination. It's about looking at ourselves without flinching from uncomfortable truths.</li>
                    <li><span class="highlight">"Moral Inventory":</span> This is not about self-condemnation but about taking stock of our character – our assets and liabilities, strengths and weaknesses, and particularly our defects.</li>
                    <li><span class="highlight">Purpose:</span> The goal is to uncover the root causes of our addictive behaviors and the things that block us from our Higher Power and healthy relationships.</li>
                    <li><span class="highlight">Written Inventory:</span> The text strongly suggests writing this inventory. Putting it on paper helps to clarify thoughts and see patterns more objectively.</li>
                    <li><span class="highlight">Focus Areas:</span> Common areas of inventory include resentments, fears, and harms done to others (often explored through our conduct in relationships).</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text frames Step Four as essential for understanding ourselves and for clearing away the wreckage of the past.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" provides deeper context on the process and spirit of Step Four.</p>
                <ul>
                    <li><span class="highlight">Not a Confession:</span> Step Four is primarily for ourselves, to gain self-knowledge. Step Five is where we share it.</li>
                    <li><span class="highlight">Looking for Patterns:</span> The inventory helps identify recurring patterns of behavior, thought, and emotion, particularly those related to self-centeredness, dishonesty, fear, and resentment.</li>
                    <li><span class="highlight">Assets as well as Defects:</span> While focusing on defects, it's also important to acknowledge our positive qualities and assets. This provides a balanced perspective.</li>
                    <li><span class="highlight">Guidance from a Sponsor:</span> Working with a sponsor is highly recommended for guidance on how to approach the inventory and to navigate the emotions that may arise.</li>
                    <li><span class="highlight">Courage and Thoroughness:</span> The book stresses the need for courage to face difficult truths and thoroughness to ensure the inventory is comprehensive.</li>
                </ul>
                <p class="mt-3 emphasis">This text emphasizes Step Four as a tool for self-discovery that paves the way for healing and change.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer structured approaches and questions for conducting a Fourth Step inventory.</p>
                <ul>
                    <li><span class="highlight">Specific Inventory Formats:</span> Guides often provide outlines or formats for inventorying resentments (listing the person/institution, the cause, how it affected us, and our part), fears, and sexual conduct/harms.</li>
                    <li><span class="highlight">Exploring Our Part:</span> A crucial element is identifying our own role in conflicts and difficulties, moving beyond blaming others.</li>
                    <li><span class="highlight">Uncovering Underlying Defects:</span> Questions help to trace specific behaviors or feelings back to underlying character defects (e.g., selfishness, dishonesty, pride, fear).</li>
                    <li><span class="highlight">Dealing with Emotions:</span> The guides acknowledge that doing an inventory can bring up strong emotions and suggest ways to process them with support.</li>
                    <li><span class="highlight">Preparation for Step Five:</span> The written inventory becomes the material that is shared in Step Five.</li>
                </ul>
                <p class="mt-3 emphasis">The guides provide practical tools to make the "searching and fearless" inventory manageable and effective.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Four</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Four is a critical action step that involves deep self-examination. It's about looking honestly at ourselves to understand the internal landscape that contributed to our addiction. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Rigorous Honesty</h4>
                    <p>This step demands a commitment to <span class="highlight">unflinching honesty</span>. It's about looking at the good, the bad, and the ugly within ourselves without denial or minimization.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Self-Awareness and Discovery</h4>
                    <p>The primary goal is to gain <span class="highlight">deep self-awareness</span>. By identifying patterns of thinking, feeling, and behaving, especially our character defects, we begin to understand the roots of our problems.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Taking Personal Responsibility</h4>
                    <p>A key aspect is moving beyond blaming others or circumstances and <span class="highlight">taking responsibility for our own part</span> in our difficulties and the harms we may have caused.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Courage and Fearlessness</h4>
                    <p>Facing oneself honestly can be frightening. Step Four requires <span class="highlight">courage to confront fears, shame, and guilt</span> that may have been buried for a long time.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Preparation for Healing</h4>
                    <p>The inventory is not an end in itself but a <span class="highlight">preparation for healing and change</span>. The insights gained are crucial for the work of the subsequent steps, particularly Steps Five, Six, and Seven.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. The Power of Writing</h4>
                    <p>The act of <span class="highlight">writing the inventory down</span> is consistently emphasized as a powerful tool for objectivity, clarity, and thoroughness. It brings hidden issues to light.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Four is an intensive but invaluable process of self-discovery. By courageously examining ourselves, we uncover the very things that need to be surrendered for lasting recovery and spiritual growth.
            </p>
        </div>
    </div>
</div>
`;

const step5HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text highlights Step Five as a crucial step in breaking isolation and fostering humility and honesty.</p>
                <ul>
                    <li><span class="highlight">Three-Fold Admission:</span> The admission is made to God (as we understand Him), to ourselves (deepening self-honesty), and to another human being (typically a sponsor or trusted advisor).</li>
                    <li><span class="highlight">"Exact Nature of Our Wrongs":</span> This refers to sharing the findings of the Fourth Step inventory – our defects, patterns, and specific instances of harm or wrongdoing, without minimizing or exaggerating.</li>
                    <li><span class="highlight">Purpose:</span> To end the isolation caused by secrets and guilt, to gain an objective perspective on our past, and to experience humility.</li>
                    <li><span class="highlight">Choosing the Right Person:</span> The importance of selecting a trustworthy, understanding, and non-judgmental person (often a sponsor) to share with is emphasized.</li>
                    <li><span class="highlight">Relief and Freedom:</span> Sharing these burdens often brings immense relief and a sense of freedom from the past.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text frames Step Five as a vital act of courage that helps us see ourselves more clearly and begin to heal.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" delves into the spiritual and psychological benefits of Step Five.</p>
                <ul>
                    <li><span class="highlight">Breaking Down Pride and Ego:</span> Sharing our deepest secrets and defects with another person is a powerful antidote to pride and ego.</li>
                    <li><span class="highlight">Gaining Perspective:</span> Hearing our inventory spoken aloud and receiving feedback can help us see our past and ourselves more realistically, often realizing we are not uniquely terrible.</li>
                    <li><span class="highlight">The Healing Power of Being Heard:</span> Being truly heard and accepted by another human being, despite our flaws, is a profound healing experience.</li>
                    <li><span class="highlight">Identifying Self-Deception:</span> The listener may help us identify areas of self-deception or patterns we haven't fully recognized.</li>
                    <li><span class="highlight">Preparation for Amends:</span> Step Five helps solidify our understanding of the harms we've caused, preparing us for making amends in Steps Eight and Nine.</li>
                </ul>
                <p class="mt-3 emphasis">This text emphasizes that Step Five is where we begin to integrate the insights of Step Four and experience the unburdening that comes from shared honesty.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer practical advice for preparing for and completing Step Five.</p>
                <ul>
                    <li><span class="highlight">Overcoming Fear of Sharing:</span> Guides address the common fears associated with Step Five (fear of judgment, rejection, shame) and offer reassurance.</li>
                    <li><span class="highlight">Choosing a Listener:</span> Provides criteria for selecting an appropriate person to share with (e.g., someone with NA program experience, trustworthy, capable of keeping confidences).</li>
                    <li><span class="highlight">The Process of Sharing:</span> Suggests reading the Fourth Step inventory aloud and being completely honest and thorough.</li>
                    <li><span class="highlight">Post-Step Five Feelings:</span> Discusses the range of emotions that can follow (relief, peace, vulnerability) and the importance of self-care.</li>
                    <li><span class="highlight">Reinforcing Honesty with Self and God:</span> The act of sharing with another human being reinforces the admissions made to oneself and to a Higher Power.</li>
                </ul>
                <p class="mt-3 emphasis">The guides help members navigate the practical and emotional aspects of this deeply personal step.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Five</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Five is a powerful step that moves the recovery process from internal reflection to external admission, breaking the chains of secrecy and isolation. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. The Power of Confession and Admission</h4>
                    <p>Sharing our hidden truths and the "exact nature of our wrongs" with God, ourselves, and another trusted human being is a <span class="highlight">profoundly cleansing and liberating experience</span>. It breaks the power of secrets.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Humility and Overcoming Pride</h4>
                    <p>This step requires significant <span class="highlight">humility</span>. Admitting our deepest flaws to another person directly challenges the ego and pride that often fuel addiction and block spiritual growth.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Ending Isolation</h4>
                    <p>Step Five is a direct antidote to the isolation that characterizes active addiction. By sharing vulnerably, we connect with others on a deeper level and realize <span class="highlight">we are not alone in our struggles or our humanity</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Gaining Objective Perspective</h4>
                    <p>Voicing our inventory to another person allows us to hear it differently and often gain a more <span class="highlight">objective perspective</span> on our past. The listener can offer insights and help us see patterns or self-deceptions we might have missed.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Building Trust and Intimacy</h4>
                    <p>The act of sharing Step Five, and being received with understanding and acceptance, helps to <span class="highlight">build trust</span> – in another person, in the NA program, and in our Higher Power. It's a foundation for healthier relationships.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Preparation for Further Healing</h4>
                    <p>By fully admitting the nature of our wrongs, we become better prepared for the subsequent steps of becoming ready to have these defects removed (Step Six) and humbly asking for their removal (Step Seven). It <span class="highlight">clears the ground for deeper change</span>.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Five is a courageous act of vulnerability that leads to significant emotional and spiritual unburdening. It solidifies our commitment to honesty and sets the stage for profound healing and transformation.
            </p>
        </div>
    </div>
</div>
`;

const step6HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text introduces Step Six as a pivotal point where willingness meets action, building upon the self-examination of Steps Four and Five.</p>
                <ul>
                    <li><span class="highlight">Nature of Defects:</span> Defects of character are described as survival mechanisms that once seemed necessary but now hinder spiritual growth and healthy living. They are manifestations of self-centeredness.</li>
                    <li><span class="highlight">Becoming "Entirely Ready":</span> This readiness isn't about achieving perfection but about a deep-seated willingness. It's a process that might involve recognizing the pain and unmanageability our defects cause.</li>
                    <li><span class="highlight">The Role of a Higher Power:</span> The step explicitly mentions "God." This emphasizes reliance on a Power greater than ourselves for the removal of these defects, acknowledging our inability to remove them on our own.</li>
                    <li><span class="highlight">Humility and Honesty:</span> Continuing from Step Five, honesty about our defects and humility in accepting we need help are crucial.</li>
                    <li><span class="highlight">Fear of Change:</span> The text often acknowledges the fear associated with letting go of familiar, albeit harmful, patterns of behavior and thinking. Step Six is about confronting this fear with faith.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text frames Step Six as a spiritual surrender, moving from intellectual understanding to a heartfelt desire for change facilitated by a Higher Power.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" delves deeper into the practical and spiritual application of Step Six.</p>
                <ul>
                    <li><span class="highlight">What "Entirely Ready" Means:</span> It signifies a state where we are no longer ambivalent. We see the defects clearly, understand their negative impact, and genuinely desire their removal, without reservations. This readiness is a gift of the program.</li>
                    <li><span class="highlight">From Defects to Assets:</span> The book often discusses the idea that the energy tied up in our defects can be transformed. What were once liabilities can, through spiritual growth, become assets.</li>
                    <li><span class="highlight">Patience and Process:</span> Becoming entirely ready is a process, not an overnight event. It may involve repeatedly recognizing a defect's operation in our lives and recommitting to willingness.</li>
                    <li><span class="highlight">Letting Go of Control:</span> A central theme is relinquishing the illusion that we can control or "fix" our defects ourselves. The step is an admission of this and a turn towards our Higher Power.</li>
                    <li><span class="highlight">Action and Willingness:</span> While the Higher Power does the "removing," our part is to cultivate willingness. This can involve prayer, meditation, and discussing our struggles with a sponsor or trusted NA members.</li>
                </ul>
                <p class="mt-3 emphasis">This text emphasizes that readiness is a spiritual condition that grows as we work the program and trust in a Higher Power.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides provide questions and exercises to help members personally engage with Step Six.</p>
                <ul>
                    <li><span class="highlight">Identifying Reservations:</span> The guides prompt us to explore any hidden reservations we might have about letting go of certain defects. Why might we cling to them? What perceived benefits do they offer?</li>
                    <li><span class="highlight">Connecting Defects to Unmanageability:</span> Questions help link specific character defects (identified in Step Four) to the unmanageability and pain in our lives, reinforcing the desire for change.</li>
                    <li><span class="highlight">Understanding "Removal":</span> The guides clarify that "removal" may not mean a defect vanishes instantly or forever. It often means a lessening of its power, a change in our reaction to it, or its replacement with a positive spiritual principle.</li>
                    <li><span class="highlight">The Role of Daily Practice:</span> Readiness is maintained through ongoing spiritual practices like prayer, meditation, and self-reflection, especially when old defects resurface.</li>
                    <li><span class="highlight">Personalizing the Higher Power:</span> Members are encouraged to reflect on their personal understanding of a Higher Power and how they can develop the faith necessary to trust that Power with their defects.</li>
                </ul>
                <p class="mt-3 emphasis">The Step Working Guides make Step Six a deeply personal and introspective process, fostering genuine readiness through honest self-appraisal.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Six</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Six is a profound turning point in the recovery journey. It's where the awareness gained in previous steps translates into a deep-seated willingness for fundamental change. Across all NA literature, several core themes emerge:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. The Essence of "Entirely Ready"</h4>
                    <p>This isn't about being perfect or without fear. It's about reaching a point of <span class="highlight">sincere and complete willingness</span>, without holding back, to have our Higher Power remove the defects that block us from spiritual growth and a better life. It's a state of surrender where the desire for change outweighs the comfort of old behaviors.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. The Crucial Role of a Higher Power</h4>
                    <p>Step Six explicitly acknowledges our powerlessness over deep-seated character defects. The "removal" is not something we achieve through willpower alone; it requires <span class="highlight">faith and reliance on a God of our understanding</span>. Our part is willingness; the Higher Power's part is the transformation.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Defects as Hindrances</h4>
                    <p>Character defects are consistently portrayed not as moral failings to be ashamed of, but as <span class="highlight">patterns of thought and behavior</span> (often rooted in self-centeredness or fear) that are now detrimental to our recovery and well-being. They are obstacles to the life NA promises.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. A Process, Not an Event</h4>
                    <p>Becoming "entirely ready" and the subsequent removal of defects is a <span class="highlight">continuous spiritual process</span>. It may involve revisiting this step, experiencing setbacks, and renewing our willingness. Patience, persistence, and ongoing spiritual connection are vital.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. The Bridge to Further Action</h4>
                    <p>Step Six is the essential preparation for Step Seven, where we humbly ask our Higher Power to remove our shortcomings. Without the readiness cultivated in Step Six, the request in Step Seven might lack sincerity or depth. It's a <span class="highlight">critical link in the chain of spiritual progress</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Honesty, Humility, and Open-mindedness</h4>
                    <p>These spiritual principles, woven throughout the steps, are particularly vital in Step Six. <span class="highlight">Honesty</span> to see our defects and our reservations, <span class="highlight">humility</span> to accept we need help, and <span class="highlight">open-mindedness</span> to believe change is possible through a Higher Power are foundational.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Ultimately, Step Six invites us to a deeper level of trust and surrender, paving the way for profound personal transformation and a more fulfilling life in recovery.
            </p>
        </div>
    </div>
</div>
`;

const step7HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Seven as an act of humility and faith, following the readiness achieved in Step Six.</p>
                <ul>
                    <li><span class="highlight">"Humbly Asked Him":</span> Humility is paramount. It means recognizing our limitations and our need for help from our Higher Power ("Him" referring to God as understood). The asking is a direct appeal.</li>
                    <li><span class="highlight">"To Remove Our Shortcomings":</span> "Shortcomings" are the defects of character identified in Step Four and for which we became ready to part with in Step Six. The request is for their removal or transformation.</li>
                    <li><span class="highlight">Faith in Action:</span> This step is an active demonstration of faith, trusting that our Higher Power can and will help if asked sincerely.</li>
                    <li><span class="highlight">The Role of Prayer:</span> Prayer is often a central part of Step Seven, whether formal or informal, as a means of communicating this humble request.</li>
                    <li><span class="highlight">Acceptance of God's Will:</span> Implicit in the asking is a willingness to accept the outcome and the timing of the Higher Power.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes that Step Seven is about relinquishing our defects to a Power greater than ourselves, with humility as the key.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" explores the nature of humility and the process of asking.</p>
                <ul>
                    <li><span class="highlight">Understanding Humility:</span> Humility is not humiliation, but an accurate assessment of ourselves – our strengths and weaknesses – and an acceptance of our place in the universe. It's teachability.</li>
                    <li><span class="highlight">The Nature of "Removal":</span> Removal of shortcomings may not be instantaneous or complete. It's often a gradual process, where the defect's power lessens, or we are given the strength to act differently.</li>
                    <li><span class="highlight">Our Part After Asking:</span> While we ask our Higher Power to remove shortcomings, we also have a part to play in practicing new behaviors and spiritual principles.</li>
                    <li><span class="highlight">Patience and Persistence:</span> Shortcomings may resurface. Step Seven may need to be revisited often, renewing our humble request.</li>
                    <li><span class="highlight">Focus on Progress, Not Perfection:</span> The goal is spiritual progress and a reduction in the harm caused by our defects.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights that humility opens the door for our Higher Power to work in our lives, transforming our character.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides help members to actively and personally engage with Step Seven.</p>
                <ul>
                    <li><span class="highlight">Identifying Specific Shortcomings:</span> Guides encourage listing the specific shortcomings (from Step Four/Six) for which removal is being sought.</li>
                    <li><span class="highlight">Exploring the Meaning of Humility:</span> Questions help members reflect on what humility means to them and how to cultivate it.</li>
                    <li><span class="highlight">Formulating the Request:</span> Members might be encouraged to write their own Seventh Step prayer or articulate their request in a personal way.</li>
                    <li><span class="highlight">Trust and Faith:</span> Prompts to examine the level of trust and faith in their Higher Power's ability and willingness to help.</li>
                    <li><span class="highlight">Recognizing Changes:</span> Encouragement to look for evidence, however small, of shortcomings being lifted or changed after working this step.</li>
                </ul>
                <p class="mt-3 emphasis">The guides aim to make the humble asking of Step Seven a sincere and meaningful spiritual practice.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Seven</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Seven is a direct appeal to a Higher Power, born out of the willingness and self-awareness cultivated in the preceding steps. It is a cornerstone of spiritual growth in NA. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. The Centrality of Humility</h4>
                    <p>Humility is the indispensable ingredient of Step Seven. It involves <span class="highlight">recognizing our own insufficiency</span> to overcome our defects and approaching our Higher Power with genuine openness and a lack of pretense.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Active Reliance on a Higher Power</h4>
                    <p>This step moves beyond belief (Step Two) and decision (Step Three) to <span class="highlight">active petition and reliance</span>. It's about engaging with our Higher Power with a specific request for transformation.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. The Desire for Character Change</h4>
                    <p>Step Seven reflects a deep desire not just to stop using drugs, but to <span class="highlight">undergo a fundamental change in character</span>, to become a better, healthier, and more spiritually aligned person.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Faith and Trust in the Process</h4>
                    <p>Humbly asking requires <span class="highlight">faith that our Higher Power can help</span> and trust that the process of recovery, including the removal of shortcomings, will unfold as it should.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. A Continuous Practice</h4>
                    <p>The removal of shortcomings is rarely a one-time event. Step Seven often becomes a <span class="highlight">daily practice</span> of asking for help with defects as they arise, fostering ongoing spiritual development.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Letting Go of Defects</h4>
                    <p>This step is about truly <span class="highlight">letting go of the character defects</span> we identified and became willing to part with. It's an act of surrender, trusting our Higher Power to do what we cannot do for ourselves.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Seven is a profound expression of humility and faith. By humbly asking for the removal of our shortcomings, we open ourselves to the transformative power of our Higher Power and take a significant step towards spiritual freedom.
            </p>
        </div>
    </div>
</div>
`;

const step8HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text introduces Step Eight as a preparatory step for repairing past damages, focusing on list-making and cultivating willingness.</p>
                <ul>
                    <li><span class="highlight">"Made a List":</span> This involves a thorough review of our past, drawing from the Fourth Step inventory, to identify all individuals, institutions, or groups we have harmed through our addiction and associated behaviors.</li>
                    <li><span class="highlight">"All Persons We Had Harmed":</span> The list should be comprehensive, without omitting anyone due to fear, pride, or perceived difficulty. This includes emotional, physical, financial, and spiritual harm.</li>
                    <li><span class="highlight">"Became Willing":</span> This is a crucial spiritual and emotional preparation. It's about developing a sincere desire to set things right, regardless of the other person's reaction or whether we feel they also harmed us.</li>
                    <li><span class="highlight">Purpose:</span> To clear away the wreckage of the past, take responsibility for our actions, and prepare for the action of making amends in Step Nine.</li>
                    <li><span class="highlight">Overcoming Obstacles:</span> Fear, resentment, and pride can be significant barriers to making the list and becoming willing. Working with a sponsor is key.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text frames Step Eight as an act of courage and responsibility, essential for freeing ourselves from guilt and remorse.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" delves into the nuances of identifying harm and cultivating willingness.</p>
                <ul>
                    <li><span class="highlight">Defining Harm:</span> Harm can be obvious (theft, violence) or subtle (neglect, dishonesty, broken promises, emotional manipulation). The book encourages a broad understanding.</li>
                    <li><span class="highlight">Our Own Part:</span> The focus is strictly on our part in causing harm, not on the faults of others.</li>
                    <li><span class="highlight">Willingness as a Process:</span> Becoming willing is often a gradual process, aided by prayer, meditation, and discussion with a sponsor. It's about a change of heart.</li>
                    <li><span class="highlight">No Exceptions at the List Stage:</span> Everyone harmed should go on the list. Decisions about *how* or *if* direct amends can be made come in Step Nine.</li>
                    <li><span class="highlight">Freedom from Guilt:</span> Step Eight offers a significant opportunity to move beyond the paralyzing guilt that often accompanies addiction.</li>
                </ul>
                <p class="mt-3 emphasis">This text emphasizes that Step Eight is about developing the right attitude and thoroughness needed before taking the action of making amends.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides provide practical exercises for creating the list and fostering willingness.</p>
                <ul>
                    <li><span class="highlight">Systematic List Creation:</span> Guides may suggest categories (family, friends, employers, etc.) or time periods to ensure the list is thorough. Referring to the Fourth Step is crucial.</li>
                    <li><span class="highlight">Identifying Specific Harms:</span> For each person on the list, it's helpful to note the specific ways they were harmed.</li>
                    <li><span class="highlight">Exploring Resistance to Willingness:</span> Questions prompt reflection on fears, resentments, or justifications that might prevent willingness to make amends to certain people.</li>
                    <li><span class="highlight">The Role of Prayer in Becoming Willing:</span> Encourages using prayer or meditation to ask for the willingness if it's not initially present.</li>
                    <li><span class="highlight">Distinguishing Step Eight from Step Nine:</span> Clarifies that Step Eight is about the list and willingness; Step Nine is about the action of making amends.</li>
                </ul>
                <p class="mt-3 emphasis">The guides help to make Step Eight a concrete and soul-searching preparation for mending past relationships and actions.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Eight</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Eight is a critical preparatory step that shifts the focus from internal work to our impact on others. It lays the groundwork for reconciliation and healing in our relationships. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Taking Responsibility for Harm Caused</h4>
                    <p>This step is a direct acknowledgment of the <span class="highlight">negative impact our addiction and behaviors have had on others</span>. It involves looking squarely at the harm done without making excuses.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. The Importance of Thoroughness</h4>
                    <p>Making a <span class="highlight">comprehensive list</span> is emphasized. This thoroughness ensures that we don't selectively avoid difficult situations and that we are truly committed to cleaning up the past.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Cultivating Genuine Willingness</h4>
                    <p>Becoming <span class="highlight">sincerely willing to make amends</span> is a spiritual achievement. It requires overcoming pride, fear, and resentment, and developing a genuine desire to set things right for the sake of others and our own spiritual well-being.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Preparation for Action</h4>
                    <p>Step Eight is primarily about preparation. The list and the willingness developed here are the <span class="highlight">essential prerequisites</span> for the direct action of making amends in Step Nine.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Humility and Honesty in Relationships</h4>
                    <p>This step fosters humility by requiring us to look at our relational failings. It continues the practice of honesty, extending it to how we have treated others. It's about <span class="highlight">cleaning our side of the street</span>.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Beginning of Freedom from the Past</h4>
                    <p>By making the list and becoming willing, we begin to <span class="highlight">untangle ourselves from the guilt, remorse, and secrets</span> that bind us to our past, paving the way for healthier future relationships.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Eight is an act of courage and self-honesty that sets the stage for profound healing in our relationships with others and with ourselves. It is about preparing our hearts and minds to repair the damage of the past.
            </p>
        </div>
    </div>
</div>
`;

const step9HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Nine as the action step of repairing past harms, guided by prudence and consideration.</p>
                <ul>
                    <li><span class="highlight">"Made Direct Amends":</span> This means taking personal action to acknowledge the harm done and attempt to set things right with the people on our Eighth Step list. It's more than just an apology; it often involves restitution or changed behavior.</li>
                    <li><span class="highlight">"Wherever Possible":</span> Acknowledges that direct amends may not always be feasible (e.g., person cannot be found, is deceased).</li>
                    <li><span class="highlight">"Except When to Do So Would Injure Them or Others":</span> This crucial caveat requires careful judgment and often guidance from a sponsor. The primary goal is to heal, not to cause further harm by dredging up painful issues unnecessarily or by revealing information that could hurt the person or innocent third parties.</li>
                    <li><span class="highlight">Timing and Approach:</span> The timing, manner, and content of amends require careful thought and spiritual guidance.</li>
                    <li><span class="highlight">Focus on Our Part:</span> The purpose is to clean our side of the street, regardless of the other person's reaction or acceptance of the amends.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes that Step Nine brings freedom from the past and allows for the rebuilding of trust and relationships.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" elaborates on the spirit and practicalities of making amends.</p>
                <ul>
                    <li><span class="highlight">Different Types of Amends:</span> Amends can be verbal (apology, admission of wrongdoing), financial (repaying debts), or behavioral ("living amends" – demonstrating changed behavior over time).</li>
                    <li><span class="highlight">Motives:</span> It's important to check our motives. Amends should be made for the right reasons – to take responsibility and repair harm, not to manipulate or seek forgiveness for our own comfort.</li>
                    <li><span class="highlight">Indirect Amends:</span> When direct amends would cause harm, indirect amends may be appropriate (e.g., doing good deeds, contributing to society, changing harmful patterns).</li>
                    <li><span class="highlight">Courage and Humility:</span> Making amends often requires significant courage to face those we've harmed and humility to admit our wrongs without defense.</li>
                    <li><span class="highlight">Letting Go of Outcomes:</span> We cannot control how our amends will be received. The spiritual benefit comes from making the effort sincerely.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights Step Nine as a profound opportunity for spiritual growth, healing relationships, and living with integrity.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer practical guidance for navigating the complexities of Step Nine.</p>
                <ul>
                    <li><span class="highlight">Planning Amends with a Sponsor:</span> Crucial for discussing who to approach, what to say, and whether direct amends are appropriate, especially considering the "except when" clause.</li>
                    <li><span class="highlight">Prioritizing Amends:</span> Guidance on which amends to make first, often starting with less difficult ones to build confidence.</li>
                    <li><span class="highlight">Dealing with Fear:</span> Addressing the fears associated with confronting past harms and individuals.</li>
                    <li><span class="highlight">Handling Different Reactions:</span> Preparing for various reactions from those to whom amends are made (acceptance, rejection, anger, indifference).</li>
                    <li><span class="highlight">Amends to Self:</span> Recognizing the importance of self-forgiveness and making amends to ourselves for self-inflicted harm.</li>
                </ul>
                <p class="mt-3 emphasis">The guides help members approach Step Nine thoughtfully, responsibly, and with spiritual support.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Nine</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Nine is where the willingness developed in Step Eight translates into concrete action. It is a powerful step for healing past wounds and building a new foundation for relationships. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Action and Responsibility</h4>
                    <p>This step is fundamentally about <span class="highlight">taking direct action</span> to repair the harm we've caused. It moves beyond listing and willingness to tangible efforts to make things right.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Prudence and Consideration (The "Except When" Clause)</h4>
                    <p>A core principle is to <span class="highlight">avoid causing further injury</span>. This requires careful judgment, often with a sponsor's guidance, to determine if direct amends are appropriate or if another form is needed.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Humility and Courage</h4>
                    <p>Making amends requires <span class="highlight">humility</span> to admit fault and <span class="highlight">courage</span> to face those we have harmed, often without knowing how our efforts will be received.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Cleaning Our Side of the Street</h4>
                    <p>The focus is on our own actions and responsibilities. The spiritual benefit comes from our sincere effort to make amends, <span class="highlight">regardless of the other person's response</span> or their past behavior.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Restoring Trust and Relationships</h4>
                    <p>While not guaranteed, Step Nine often opens the door to <span class="highlight">healing damaged relationships</span> and rebuilding trust. "Living amends" – consistently changed behavior – is key to this.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Freedom from the Past</h4>
                    <p>Successfully working Step Nine brings a profound sense of <span class="highlight">freedom from the guilt, remorse, and burdens of the past</span>, allowing us to live more fully in the present.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Nine is a transformative process of accountability and repair. By courageously and responsibly making amends, we clear away the wreckage of our past and create space for healthier, more honest relationships.
            </p>
        </div>
    </div>
</div>
`;

const step10HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Ten as a maintenance step, crucial for ongoing growth and preventing relapse into old patterns.</p>
                <ul>
                    <li><span class="highlight">"Continued to Take Personal Inventory":</span> This is an ongoing process of self-examination, different from the comprehensive Fourth Step. It's about monitoring our thoughts, feelings, and actions on a regular (often daily) basis.</li>
                    <li><span class="highlight">Purpose:</span> To identify when old defects or new problems arise, allowing for quick correction before they escalate. It helps maintain spiritual fitness.</li>
                    <li><span class="highlight">"When We Were Wrong Promptly Admitted It":</span> This involves immediate honesty with ourselves, our Higher Power, and often with another person if our actions have affected them. It prevents the buildup of guilt and resentment.</li>
                    <li><span class="highlight">Spot-Check Inventory:</span> This can be a quick mental review during the day or a more reflective inventory at day's end.</li>
                    <li><span class="highlight">Keeping Current:</span> Step Ten helps us to deal with life on life's terms as it happens, rather than accumulating new wreckage.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes Step Ten as a tool for living in the present and practicing spiritual principles in daily life.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" elaborates on the practical application and benefits of Step Ten.</p>
                <ul>
                    <li><span class="highlight">Daily Practice:</span> Many members find a routine for their Tenth Step, such as an evening review or pausing during the day when disturbed.</li>
                    <li><span class="highlight">Focus on Assets and Liabilities:</span> The ongoing inventory includes recognizing not only when we are wrong but also when we are practicing spiritual principles correctly, reinforcing positive behaviors.</li>
                    <li><span class="highlight">Preventing Relapse:</span> By promptly addressing issues, Step Ten helps to prevent the buildup of negativity that can lead to relapse.</li>
                    <li><span class="highlight">Emotional Sobriety:</span> This step is key to developing emotional sobriety, learning to manage feelings constructively rather than reacting impulsively.</li>
                    <li><span class="highlight">Admitting Wrongs to Others:</span> This part of the step is about making immediate amends when our actions have harmed someone, keeping relationships clean.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights Step Ten as essential for maintaining the spiritual progress made in earlier steps and for navigating daily life with greater serenity.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer practical methods for incorporating Step Ten into daily life.</p>
                <ul>
                    <li><span class="highlight">Formats for Daily Inventory:</span> Guides may suggest questions for daily reflection (e.g., Was I resentful, fearful, dishonest today? Did I cause harm? What positive actions did I take?).</li>
                    <li><span class="highlight">Identifying Warning Signs:</span> Learning to recognize personal warning signs or triggers that indicate a need for inventory and correction.</li>
                    <li><span class="highlight">The Importance of Promptness:</span> Emphasizes addressing wrongs quickly to prevent them from festering.</li>
                    <li><span class="highlight">Using a Sponsor or Trusted Friend:</span> Discussing Tenth Step issues with a sponsor can provide perspective and accountability.</li>
                    <li><span class="highlight">Integrating with Other Steps:</span> Step Ten often leads back to other steps (e.g., needing to make amends (Step Nine), ask for removal of a shortcoming (Step Seven), or seek guidance (Step Three)).</li>
                </ul>
                <p class="mt-3 emphasis">The guides help to establish Step Ten as a regular, practical tool for self-correction and continued spiritual growth.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Ten</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Ten transitions the recovery program into a way of life, providing tools for daily maintenance and continued growth. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Ongoing Self-Awareness</h4>
                    <p>This step cultivates a practice of <span class="highlight">continuous self-monitoring and self-examination</span>. It's about staying vigilant to our thoughts, feelings, motives, and behaviors as they occur.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Prompt Admission and Correction</h4>
                    <p>When wrongs or defects surface, the principle is to <span class="highlight">admit them promptly</span> to ourselves, God, and others if necessary, and take corrective action. This prevents small issues from becoming large ones.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Maintaining Spiritual Condition</h4>
                    <p>Step Ten is a key tool for <span class="highlight">maintaining the spiritual condition</span> achieved through the previous nine steps. It's like regular housekeeping for the soul.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. Living in the Present</h4>
                    <p>By dealing with issues as they arise, Step Ten helps us to <span class="highlight">live more fully in the present moment</span>, rather than being burdened by unaddressed resentments, fears, or guilt.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Personal Responsibility in Daily Life</h4>
                    <p>This step reinforces <span class="highlight">daily personal responsibility</span> for our actions and attitudes, fostering integrity and accountability.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Continuous Improvement</h4>
                    <p>Step Ten is not about achieving perfection but about <span class="highlight">continuous improvement and growth</span>. It acknowledges that we will make mistakes, but provides a way to learn from them and keep moving forward.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Ten is the practice of applying the principles of the NA program on a daily basis. It ensures that recovery is not a static achievement but a dynamic, ongoing process of growth and self-correction.
            </p>
        </div>
    </div>
</div>
`;

const step11HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Eleven as a means to deepen our spiritual connection and receive guidance for daily living.</p>
                <ul>
                    <li><span class="highlight">"Sought through Prayer and Meditation":</span> These are the primary tools for improving conscious contact. Prayer is often seen as talking to our Higher Power, and meditation as listening.</li>
                    <li><span class="highlight">"Improve Our Conscious Contact":</span> This implies an ongoing effort to strengthen and make more aware our connection with God as we understand Him. It's about quality of connection.</li>
                    <li><span class="highlight">"Praying Only for Knowledge of His Will for Us":</span> The focus of prayer shifts from asking for specific outcomes or material things to seeking understanding of our Higher Power's guidance for our lives.</li>
                    <li><span class="highlight">"And the Power to Carry That Out":</span> Acknowledges that knowing God's will is not enough; we also need the strength and willingness to follow that guidance.</li>
                    <li><span class="highlight">Personal Practice:</span> The methods of prayer and meditation are personal and can vary widely.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text emphasizes Step Eleven as vital for receiving direction, strength, and peace in recovery.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" explores the nature of prayer, meditation, and discerning God's will.</p>
                <ul>
                    <li><span class="highlight">Different Forms of Prayer:</span> Prayer can be petition, gratitude, praise, or simply conversing with one's Higher Power.</li>
                    <li><span class="highlight">Meditation as Stillness:</span> Meditation often involves quieting the mind to become receptive to inner guidance or a sense of peace. Various techniques can be used.</li>
                    <li><span class="highlight">Discerning God's Will:</span> God's will is often understood as actions aligned with spiritual principles (honesty, love, service) and what leads to peace and growth. It may be revealed through intuition, circumstances, or advice from others in recovery.</li>
                    <li><span class="highlight">Overcoming Resistance:</span> The book acknowledges that some may find prayer and meditation difficult initially but encourages persistence.</li>
                    <li><span class="highlight">Results of Practice:</span> Regular practice of Step Eleven can lead to increased serenity, clarity, and a stronger sense of purpose.</li>
                </ul>
                <p class="mt-3 emphasis">This text highlights Step Eleven as a way to cultivate an active, ongoing relationship with a Higher Power that guides our daily lives.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer practical suggestions for developing a practice of prayer and meditation.</p>
                <ul>
                    <li><span class="highlight">Experimenting with Techniques:</span> Encourages trying different methods of prayer (e.g., written, spoken, silent) and meditation (e.g., mindfulness, guided, focusing on breath) to find what works personally.</li>
                    <li><span class="highlight">Establishing a Routine:</span> Suggests setting aside regular time for prayer and meditation, even if brief.</li>
                    <li><span class="highlight">Reflecting on "Conscious Contact":</span> Questions to explore what "conscious contact" means to the individual and how it has been experienced.</li>
                    <li><span class="highlight">Journaling:</span> Writing down prayers, meditative insights, or reflections on God's will can be a helpful practice.</li>
                    <li><span class="highlight">Seeking Guidance:</span> Discussing experiences with prayer and meditation with a sponsor or spiritual advisor.</li>
                </ul>
                <p class="mt-3 emphasis">The guides aim to help members develop a consistent and meaningful Eleventh Step practice tailored to their individual needs and understanding.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Eleven</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Eleven focuses on deepening the spiritual connection that is central to long-term recovery in NA. It's about actively cultivating a relationship with a Higher Power. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Active Spiritual Pursuit</h4>
                    <p>This step emphasizes that a relationship with a Higher Power requires <span class="highlight">active effort and seeking</span> through the practices of prayer and meditation.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Improving Conscious Contact</h4>
                    <p>The goal is not just belief, but an <span class="highlight">improved, more aware, and more intimate connection</span> with God as we understand Him. It's about quality and depth of relationship.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Seeking Guidance, Not Dictating Terms</h4>
                    <p>Prayer shifts from asking for specific outcomes to <span class="highlight">seeking knowledge of our Higher Power's will</span> for us, trusting that this guidance will lead to our true good.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. The Power to Act on Guidance</h4>
                    <p>Recognizing that knowing God's will is insufficient without the <span class="highlight">strength and willingness to follow through</span>, we also pray for this power.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Daily Spiritual Maintenance</h4>
                    <p>Like Step Ten, Step Eleven is a <span class="highlight">daily practice</span> that sustains and deepens our spiritual condition, providing ongoing direction and peace.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Personal and Flexible Practices</h4>
                    <p>NA literature stresses that <span class="highlight">prayer and meditation are highly personal</span>. Individuals are encouraged to find methods that resonate with them and their understanding of a Higher Power.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Eleven is the engine of ongoing spiritual growth in recovery. Through consistent prayer and meditation, we cultivate a guiding relationship with our Higher Power, leading to greater wisdom, strength, and serenity in our daily lives.
            </p>
        </div>
    </div>
</div>
`;

const step12HtmlContent = `
<div class="max-w-6xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Basic Text</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Basic Text presents Step Twelve as the culmination of the previous steps, leading to a new way of life characterized by spiritual awakening, service, and principled living.</p>
                <ul>
                    <li><span class="highlight">"Having Had a Spiritual Awakening":</span> This is a profound change in perception, attitude, and way of life that results from working the first eleven steps. It's not necessarily a sudden dramatic event but can be a gradual realization of a new consciousness.</li>
                    <li><span class="highlight">"As the Result of These Steps":</span> Emphasizes that the spiritual awakening is a direct outcome of diligently working the NA program.</li>
                    <li><span class="highlight">"We Tried to Carry This Message to Addicts":</span> This is the service aspect – sharing the hope and promise of recovery with other addicts who are still suffering. This can take many forms (sponsorship, sharing in meetings, service work).</li>
                    <li><span class="highlight">"And to Practice These Principles in All Our Affairs":</span> This means applying the spiritual principles of the NA program (honesty, humility, love, patience, etc.) in every aspect of life – relationships, work, family, and community.</li>
                </ul>
                <p class="mt-3 emphasis">The Basic Text frames Step Twelve as the joyous outcome of recovery – a life transformed, with a new purpose found in helping others and living by spiritual principles.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from "It Works: How and Why"</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">"It Works: How and Why" explores the nature of spiritual awakening and the practice of Step Twelve.</p>
                <ul>
                    <li><span class="highlight">Defining Spiritual Awakening:</span> It's described as a new state of consciousness and being, characterized by peace, purpose, and a connection to a Higher Power and others. It manifests as a change in outlook and behavior.</li>
                    <li><span class="highlight">Carrying the Message Effectively:</span> This involves sharing personal experience, strength, and hope, rather than preaching or giving advice. Attraction rather than promotion is key. Anonymity is also vital.</li>
                    <li><span class="highlight">Practicing Principles as a Way of Life:</span> This means making the principles of NA the foundation of all decisions and actions. It's about living the program consistently.</li>
                    <li><span class="highlight">Service as a Safeguard for Sobriety:</span> Helping others reinforces one's own recovery and deepens gratitude.</li>
                    <li><span class="highlight">The Joy of Recovery:</span> Step Twelve is often associated with the joy and fulfillment that come from a spiritually awakened life and from giving back.</li>
                </ul>
                <p class="mt-3 emphasis">This text emphasizes that Step Twelve is not an end but a new beginning – a continuous journey of growth, service, and living by spiritual principles.</p>
            </div>
        </div>
        <div class="card">
            <div class="card-header">
                <h3 class="text-xl font-semibold">Insights from the Step Working Guides</h3>
            </div>
            <div class="card-content">
                <p class="mb-3">The Step Working Guides offer ways to understand and apply the three parts of Step Twelve.</p>
                <ul>
                    <li><span class="highlight">Reflecting on Spiritual Awakening:</span> Questions to help members identify the changes in their lives, attitudes, and perceptions that signify a spiritual awakening, however subtle.</li>
                    <li><span class="highlight">Identifying Ways to Carry the Message:</span> Exploring various forms of service, from formal positions to simply being a welcoming presence at meetings or offering support to newcomers.</li>
                    <li><span class="highlight">Applying Principles in Specific Life Areas:</span> Prompts to consider how to practice honesty, humility, tolerance, etc., in challenging situations at home, work, or in the community.</li>
                    <li><span class="highlight">Understanding the "Why" of Service:</span> Reflecting on how helping others benefits one's own recovery.</li>
                    <li><span class="highlight">Living the Program Fully:</span> Encouragement to integrate all twelve steps into a cohesive way of life.</li>
                </ul>
                <p class="mt-3 emphasis">The guides help members to actively live out Step Twelve, making it a vibrant and integral part of their ongoing recovery.</p>
            </div>
        </div>
    </div>
    <div class="card key-themes-card mt-8">
        <div class="card-header key-themes-header">
            <h3 class="text-2xl font-semibold text-center">Key Themes & Synthesis of Step Twelve</h3>
        </div>
        <div class="card-content">
            <p class="mb-4 text-lg">Step Twelve represents the fruits of the NA program: a transformed life and a commitment to giving back. It encompasses the core purpose of Narcotics Anonymous. Key themes include:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">1. Spiritual Awakening as the Goal</h4>
                    <p>The ultimate aim of working the steps is to experience a <span class="highlight">spiritual awakening</span> – a profound shift in consciousness that brings new meaning, purpose, and peace.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">2. Service to Others (Carrying the Message)</h4>
                    <p>A vital component of ongoing recovery is <span class="highlight">helping other addicts</span>. Sharing one's experience, strength, and hope not only aids others but also reinforces one's own sobriety and gratitude.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">3. Practicing Principles in All Affairs</h4>
                    <p>Recovery extends beyond meetings and into every aspect of life. Step Twelve calls for the <span class="highlight">consistent application of spiritual principles</span> (like honesty, humility, love, and tolerance) in all relationships and situations.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">4. A Program of Action and Living</h4>
                    <p>The Twelfth Step demonstrates that NA is not just a theory but a <span class="highlight">program of action and a way of life</span>. The principles learned are meant to be lived out daily.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">5. Gratitude and Giving Back</h4>
                    <p>Having received the gift of recovery, there's a natural desire to <span class="highlight">express gratitude by giving back</span> and helping those who still suffer. This is a cornerstone of the NA fellowship.</p>
                </div>
                <div>
                    <h4 class="text-xl font-semibold text-sky-700 mb-2">6. Continuous Growth and Application</h4>
                    <p>Step Twelve is not a destination but an <span class="highlight">ongoing commitment</span> to spiritual growth, service, and principled living, ensuring that recovery remains vibrant and meaningful.</p>
                </div>
            </div>
            <p class="mt-6 text-center text-lg font-medium text-sky-800">
                Step Twelve embodies the purpose and promise of Narcotics Anonymous: a life transformed by spiritual principles, dedicated to carrying the message of hope, and lived with integrity in all areas.
            </p>
        </div>
    </div>
</div>
`;


// --- Data for Pages ---
const stepsData = [
  {
    id: 1,
    title: "Step One",
    text: "We admitted that we were powerless over our addiction, that our lives had become unmanageable.",
    summary: "This step is about honesty and acceptance. It's the foundation of recovery, acknowledging the problem of addiction and its impact. Many find relief in this admission, as it opens the door to seeking help and starting a new way of life. It involves recognizing the unmanageability caused by addiction in various aspects of life – physical, mental, spiritual, and emotional.",
    userContentPlaceholder: step1HtmlContent
  },
  {
    id: 2,
    title: "Step Two",
    text: "We came to believe that a Power greater than ourselves could restore us to sanity.",
    summary: "Step Two introduces hope. After admitting powerlessness, this step suggests that a force or entity greater than oneself can help restore mental balance and a healthy perspective. This Power is individually understood and can be the NA group, spiritual principles, or a traditional concept of God. Open-mindedness is key to this step.",
    userContentPlaceholder: step2HtmlContent
  },
  {
    id: 3,
    title: "Step Three",
    text: "We made a decision to turn our will and our lives over to the care of God as we understood Him.",
    summary: "This step is about making a decision and taking action based on the belief developed in Step Two. It involves surrendering personal will and life management to the care of a chosen Higher Power. This doesn't mean becoming passive, but rather trusting in a guiding force and aligning one's actions with spiritual principles.",
    userContentPlaceholder: step3HtmlContent
  },
  {
    id: 4,
    title: "Step Four",
    text: "We made a searching and fearless moral inventory of ourselves.",
    summary: "Step Four is a process of self-examination. It involves honestly looking at one's character, including assets and liabilities, resentments, fears, and patterns of behavior. The goal is to gain self-understanding and identify aspects that need change. This is often a written inventory and is crucial for continued growth.",
    userContentPlaceholder: step4HtmlContent
  },
  {
    id: 5,
    title: "Step Five",
    text: "We admitted to God, to ourselves, and to another human being the exact nature of our wrongs.",
    summary: "Following the self-inventory, Step Five involves sharing these findings with a Higher Power, oneself, and another trusted individual (often a sponsor). This verbal admission helps to break denial, reduce isolation, and gain perspective on one's wrongs. It's a courageous step that fosters humility and self-acceptance.",
    userContentPlaceholder: step5HtmlContent
  },
  {
    id: 6,
    title: "Step Six",
    text: "We were entirely ready to have God remove all these defects of character.",
    summary: "Step Six is about becoming willing to let go of the character defects identified in Steps Four and Five. It's a process of preparing for change, recognizing that willpower alone isn't enough to remove these ingrained traits. Readiness comes from understanding the pain these defects cause and trusting that a Higher Power can help.",
    userContentPlaceholder: step6HtmlContent
  },
  {
    id: 7,
    title: "Step Seven",
    text: "We humbly asked Him to remove our shortcomings.",
    summary: "This step involves actively asking a Higher Power to remove the character defects identified. Humility is central here – recognizing limitations and the need for help. It's not about demanding instant perfection but about a sincere desire for spiritual growth and freedom from these shortcomings.",
    userContentPlaceholder: step7HtmlContent
  },
  {
    id: 8,
    title: "Step Eight",
    text: "We made a list of all persons we had harmed and became willing to make amends to them all.",
    summary: "Step Eight begins the process of repairing relationships and making peace with the past. It involves creating a list of individuals or institutions harmed by one's addiction and developing the willingness to make amends. This step requires honesty, courage, and a focus on taking responsibility for one's actions.",
    userContentPlaceholder: step8HtmlContent
  },
  {
    id: 9,
    title: "Step Nine",
    text: "We made direct amends to such people wherever possible, except when to do so would injure them or others.",
    summary: "Step Nine is about taking action on the willingness developed in Step Eight. It involves making direct amends to those harmed, unless doing so would cause further harm. This step is crucial for clearing away guilt and remorse, fostering forgiveness (of self and others), and achieving greater personal freedom.",
    userContentPlaceholder: step9HtmlContent
  },
  {
    id: 10,
    title: "Step Ten",
    text: "We continued to take personal inventory and when we were wrong promptly admitted it.",
    summary: "Step Ten is about maintaining recovery on a daily basis. It involves ongoing self-examination, recognizing when one is wrong or when old patterns resurface, and promptly admitting these wrongs. This practice helps to prevent the buildup of resentments and ensures continued spiritual growth.",
    userContentPlaceholder: step10HtmlContent
  },
  {
    id: 11,
    title: "Step Eleven",
    text: "We sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.",
    summary: "This step focuses on deepening one's spiritual connection through prayer and meditation. The aim is to improve conscious contact with a Higher Power, seeking guidance, knowledge of God's will, and the strength to live accordingly. It's a personal journey of spiritual growth and seeking direction.",
    userContentPlaceholder: step11HtmlContent
  },
  {
    id: 12,
    title: "Step Twelve",
    text: "Having had a spiritual awakening as a result of these steps, we tried to carry this message to addicts and to practice these principles in all our affairs.",
    summary: "Step Twelve is about giving back and living the principles of recovery. A spiritual awakening is the result of working the previous steps. This step involves carrying the message of hope and recovery to other addicts and applying the spiritual principles learned in all aspects of life. Service and living by these principles are key to maintaining one's own recovery.",
    userContentPlaceholder: step12HtmlContent
  }
];

const generalPagesData = {
  whatIsNA: {
    title: "What is the Narcotics Anonymous Program?",
    content: `
      <p class="mb-4">NA is a nonprofit Fellowship or society of men and women for whom drugs had become a major problem. We are recovering addicts who meet regularly to help each other stay clean. This is a program of complete abstinence from all drugs. There is only one requirement for membership, the desire to stop using. We suggest that you keep an open mind and give yourself a break. Our program is a set of principles written so simply that we can follow them in our daily lives. The most important thing about them is that they work.</p>
      <p class="mb-4">There are no strings attached to NA. We are not affiliated with any other organizations, we have no initiation fees or dues, no pledges to sign, no promises to make to anyone. We are not connected with any political, religious or law enforcement groups, and are under no surveillance at any time. Anyone may join us, regardless of age, race, sexual identity, creed, religion or lack of religion.</p>
      <p class="mb-4">We are not interested in what or how much you used or who your connections were, what you have done in the past, how much or how little you have, but only in what you want to do about your problem and how we can help. The newcomer is the most important person at any meeting, because we can only keep what we have by giving it away. We have learned from our group experience that those who keep coming to our meetings regularly stay clean.</p>
      <h3 class="text-2xl font-semibold mt-6 mb-3">Why Are We Here?</h3>
      <p class="mb-4">Before coming to the Fellowship of NA, we could not manage our own lives. We could not live and enjoy life as other people do. We had to have something different and we thought we had found it in drugs. We placed their use ahead of the welfare of our families, our wives, husbands, and our children. We had to have drugs at all costs. We did many people great harm, but most of all we harmed ourselves. Through our inability to accept personal responsibilities we were actually creating our own problems. We seemed to be incapable of facing life on its own terms.</p>
      <p class="mb-4">Most of us realized that in our addiction we were slowly committing suicide, but addiction is such a cunning enemy of life that we had lost the power to do anything about it. Many of us ended up in jail, or sought help through medicine, religion and psychiatry. None of these methods was sufficient for us. Our disease always resurfaced or continued to progress until in desperation, we sought help from each other in Narcotics Anonymous.</p>
      <p>After coming to NA we realized we were sick people. We suffered from a disease from which there is no known cure. It can, however, be arrested at some point, and recovery is then possible.</p>
    `
  },
  traditions: {
    title: "The Twelve Traditions of NA",
    content: `
      <p class="mb-4">We keep what we have only with vigilance, and just as freedom for the individual comes from the Twelve Steps, so freedom for the group springs from our Traditions. As long as the ties that bind us together are stronger than those that would tear us apart, all will be well.</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li>Our common welfare should come first; personal recovery depends on NA unity.</li>
        <li>For our group purpose there is but one ultimate authority—a loving God as He may express Himself in our group conscience. Our leaders are but trusted servants; they do not govern.</li>
        <li>The only requirement for membership is a desire to stop using.</li>
        <li>Each group should be autonomous except in matters affecting other groups or NA as a whole.</li>
        <li>Each group has but one primary purpose—to carry the message to the addict who still suffers.</li>
        <li>An NA group ought never endorse, finance, or lend the NA name to any related facility or outside enterprise, lest problems of money, property or prestige divert us from our primary purpose.</li>
        <li>Every NA group ought to be fully self-supporting, declining outside contributions.</li>
        <li>Narcotics Anonymous should remain forever nonprofessional, but our service centers may employ special workers.</li>
        <li>NA, as such, ought never be organized, but we may create service boards or committees directly responsible to those they serve.</li>
        <li>Narcotics Anonymous has no opinion on outside issues; hence the NA name ought never be drawn into public controversy.</li>
        <li>Our public relations policy is based on attraction rather than promotion; we need always maintain personal anonymity at the level of press, radio, and films.</li>
        <li>Anonymity is the spiritual foundation of all our Traditions, ever reminding us to place principles before personalities.</li>
      </ol>
      <p>Understanding these Traditions comes slowly over a period of time. We pick up information as we talk to members and visit various groups. It usually isn't until we get involved with service that someone points out that "personal recovery depends on NA unity," and that unity depends on how well we follow our Traditions. The Twelve Traditions of NA are not negotiable. They are the guidelines that keep our Fellowship alive and free.</p>
    `
  },
  recoveryRelapse: {
    title: "Recovery and Relapse",
    content: `
      <p class="mb-4">Many people think that recovery is simply a matter of not using drugs. They consider a relapse a sign of complete failure, and long periods of abstinence a sign of complete success. We in the recovery program of Narcotics Anonymous have found that this perception is too simplistic. After a member has had some involvement in our Fellowship, a relapse may be the jarring experience that brings about a more rigorous application of the program. By the same token we have observed some members who remain abstinent for long periods of time whose dishonesty and self-deceit still prevent them from enjoying complete recovery and acceptance within society. Complete and continuous abstinence, however, in close association and identification with others in NA groups, is still the best ground for growth.</p>
      <p class="mb-4">Although all addicts are basically the same in kind, we do, as individuals, differ in degree of sickness and rate of recovery. There may be times when a relapse lays the groundwork for complete freedom. At other times that freedom can only be achieved by a grim and obstinate willfulness to hang on to abstinence come hell or high water until a crisis passes. An addict, who by any means can lose, even for a time, the need or desire to use, and has free choice over impulsive thinking and compulsive action, has reached a turning point that may be the decisive factor in his recovery.</p>
      <p class="mb-4">We have seen addicts come to our Fellowship, try our program and stay clean for a period of time. Over time some addicts lost contact with other recovering addicts and eventually returned to active addiction. They forgot that it is really the first drug that starts the deadly cycle all over again. They tried to control it, to use in moderation, or to use just certain drugs. None of these control methods work for addicts.</p>
      <p class="mb-4">Relapse is a reality. It can and does happen. Experience shows that those who do not work our program of recovery on a daily basis may relapse. We see them come back seeking recovery. Maybe they were clean for years before their relapse. If they are lucky enough to make it back, they are shaken badly. They tell us that the relapse was more horrible than earlier use. We have never seen a person who lives the Narcotics Anonymous Program relapse.</p>
      <p>Relapses are often fatal. We have attended funerals of loved ones who died from a relapse. They died in various ways. Often we see relapsers lost for years, living in misery. Those who make it to jail or institutions may survive and perhaps have a reintroduction to NA.</p>
    `
  }
};

// --- Components ---

const Navbar = ({ setCurrentPage, isMobileMenuOpen, toggleMobileMenu }) => {
  const commonLinkClasses = "px-3 py-2 rounded-md text-sm font-medium hover:bg-sky-700 hover:text-white transition-colors duration-150";
  const activeLinkClasses = "bg-sky-900 text-white";
  const inactiveLinkClasses = "text-sky-100";

  const [isStepsOpen, setIsStepsOpen] = useState(false);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "What is NA?", page: "whatIsNA" },
    { name: "The 12 Steps", page: "steps_dropdown", isDropdown: true },
    { name: "The 12 Traditions", page: "traditions" },
    { name: "Recovery & Relapse", page: "recoveryRelapse" },
  ];

  return (
    <nav className="bg-sky-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 text-white">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 100 100" stroke="currentColor">
                  <circle cx="50" cy="50" r="40" strokeWidth="5" />
                  <rect x="30" y="30" width="40" height="40" strokeWidth="5" transform="rotate(45 50 50)" />
                  <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">NA</text>
                </svg>
                <span className="font-semibold text-xl tracking-tight">NA Website</span>
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div key={link.page} className="relative">
                    <button
                      onClick={() => setIsStepsOpen(!isStepsOpen)}
                      className={`${commonLinkClasses} ${window.location.hash.startsWith('#/step/') ? activeLinkClasses : inactiveLinkClasses} flex items-center`}
                    >
                      {link.name}
                      <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isStepsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                    {isStepsOpen && (
                      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none max-h-96 overflow-y-auto">
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          {stepsData.map(step => (
                            <a
                              key={step.id}
                              href={`#/step/${step.id}`}
                              onClick={(e) => { e.preventDefault(); setCurrentPage(`step/${step.id}`); setIsStepsOpen(false); }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              {step.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.page}
                    href={`#/${link.page}`}
                    onClick={(e) => { e.preventDefault(); setCurrentPage(link.page); }}
                    className={`${commonLinkClasses} ${window.location.hash === `#/${link.page}` ? activeLinkClasses : inactiveLinkClasses}`}
                  >
                    {link.name}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-sky-700 inline-flex items-center justify-center p-2 rounded-md text-sky-100 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.page}>
                  <button
                    onClick={() => setIsStepsOpen(!isStepsOpen)}
                    className={`${commonLinkClasses} ${window.location.hash.startsWith('#/step/') ? activeLinkClasses : inactiveLinkClasses} w-full text-left flex justify-between items-center`}
                  >
                    {link.name}
                    <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${isStepsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                  {isStepsOpen && (
                    <div className="pl-4">
                      {stepsData.map(step => (
                        <a
                          key={step.id}
                          href={`#/step/${step.id}`}
                          onClick={(e) => { e.preventDefault(); setCurrentPage(`step/${step.id}`); toggleMobileMenu(); setIsStepsOpen(false); }}
                          className={`${commonLinkClasses} ${inactiveLinkClasses} block`}
                          role="menuitem"
                        >
                          {step.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.page}
                  href={`#/${link.page}`}
                  onClick={(e) => { e.preventDefault(); setCurrentPage(link.page); toggleMobileMenu(); }}
                  className={`${commonLinkClasses} ${window.location.hash === `#/${link.page}` ? activeLinkClasses : inactiveLinkClasses} block`}
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = ({ setCurrentPage }) => (
  <div className="animate-fadeIn p-6 md:p-10 bg-gradient-to-br from-sky-50 to-indigo-100 min-h-[calc(100vh-5rem)]">
    <header className="text-center mb-12">
      <h1 className="text-5xl font-bold text-sky-700 mb-4">Welcome to Narcotics Anonymous</h1>
      <p className="text-xl text-gray-600">A Journey of Hope and Recovery</p>
    </header>

    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-sky-800 mb-4">What is NA?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Narcotics Anonymous is a global, community-based organization with a multilingual and multicultural membership. NA was founded in 1953, and our membership growth was minimal during our initial twenty years as an organization. Since the publication of our Basic Text in 1983, the number of members and meetings has increased dramatically.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Today, NA members hold nearly 67,000 meetings weekly in 139 countries. We offer recovery from the effects of addiction through working a twelve-step program, including regular attendance at group meetings. The group atmosphere provides help from peers and offers an ongoing support network for addicts who wish to pursue and maintain a drug-free lifestyle.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-sky-800 mb-4">Our Message</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The message of Narcotics Anonymous is simple: An addict, any addict, can stop using drugs, lose the desire to use, and find a new way to live. Our message is one of hope and the promise of freedom from active addiction.
        </p>
        <button
          onClick={() => setCurrentPage('whatIsNA')}
          className="bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Learn More About NA
        </button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-sky-800 mb-6">Explore the 12 Steps</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepsData.slice(0, 6).map(step => (
            <div key={step.id} className="bg-sky-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-sky-700 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{step.text}</p>
              <button
                onClick={() => setCurrentPage(`step/${step.id}`)}
                className="text-sky-600 hover:text-sky-800 font-medium transition duration-300"
              >
                Read More &rarr;
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setCurrentPage('step/1')}
            className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            View All 12 Steps
          </button>
        </div>
      </section>
    </div>
    <footer className="text-center py-8 mt-12 text-gray-500">
      <p>&copy; {new Date().getFullYear()} NA Information Website. Content adapted from NA Fellowship-approved literature.</p>
      <p>Narcotics Anonymous, NA, and the NA Way are registered trademarks of Narcotics Anonymous World Services, Inc.</p>
    </footer>
  </div>
);

const StepPage = ({ stepId }) => {
  const step = stepsData.find(s => s.id === parseInt(stepId));

  if (!step) {
    return <div className="p-6 text-center text-red-500">Step not found.</div>;
  }

  return (
    <div className="animate-fadeIn p-6 md:p-10 bg-sky-50 min-h-[calc(100vh-5rem)]"> {/* Changed background to sky-50 for StepPage */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl"> {/* Increased max-width for better layout of cards */}
        <header className="mb-8 border-b pb-4 border-sky-200">
          <h1 className="text-4xl font-bold text-sky-700 mb-2">{step.title}</h1>
        </header>
        <p className="text-lg italic text-gray-700 mb-6 leading-relaxed p-4 bg-sky-100 rounded-md border-l-4 border-sky-500">{step.text}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-800 mb-3">Understanding the Step</h2>
          <p className="text-gray-700 leading-relaxed">{step.summary}</p>
        </section>

        <section className="mt-8 pt-6 border-t border-sky-200">
          <h2 className="text-2xl font-semibold text-sky-800 mb-4">In-Depth Exploration</h2>
          <div className="step-html-content" dangerouslySetInnerHTML={{ __html: step.userContentPlaceholder }} />
        </section>
      </div>
    </div>
  );
};

const GeneralPage = ({ pageKey }) => {
  const pageData = generalPagesData[pageKey];

  if (!pageData) {
    return <div className="p-6 text-center text-red-500">Page not found.</div>;
  }

  return (
    <div className="animate-fadeIn p-6 md:p-10 bg-sky-50 min-h-[calc(100vh-5rem)]"> {/* Changed background to sky-50 */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <header className="mb-8 border-b pb-4 border-sky-200">
          <h1 className="text-4xl font-bold text-sky-700">{pageData.title}</h1>
        </header>
        <div className="prose max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: pageData.content }}></div>
      </div>
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?|\/$/g, ''); 
      if (hash.startsWith('step/')) {
        setCurrentPage(hash);
      } else if (['home', 'whatIsNA', 'traditions', 'recoveryRelapse'].includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home'); 
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); 

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const setPageAndUpdateHash = (page) => {
    setCurrentPage(page);
    window.location.hash = `/${page}`;
    setIsMobileMenuOpen(false); 
  };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  let pageContent;
  if (currentPage.startsWith('step/')) {
    const stepId = currentPage.split('/')[1];
    pageContent = <StepPage stepId={stepId} />;
  } else {
    switch (currentPage) {
      case 'home':
        pageContent = <HomePage setCurrentPage={setPageAndUpdateHash} />;
        break;
      case 'whatIsNA':
        pageContent = <GeneralPage pageKey="whatIsNA" />;
        break;
      case 'traditions':
        pageContent = <GeneralPage pageKey="traditions" />;
        break;
      case 'recoveryRelapse':
        pageContent = <GeneralPage pageKey="recoveryRelapse" />;
        break;
      default:
        pageContent = <HomePage setCurrentPage={setPageAndUpdateHash} />;
    }
  }

  return (
    <div className="font-sans bg-gray-100">
      <Navbar setCurrentPage={setPageAndUpdateHash} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenv={toggleMobileMenu} />
      <main>
        {pageContent}
      </main>
      <style jsx global>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Styles for injected HTML step content */
        .step-html-content .card {
            background-color: #ffffff;
            border-radius: 0.75rem; /* 12px */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            margin-bottom: 1.5rem; /* 24px */
            overflow: hidden; /* To contain border radius of header */
        }
        .step-html-content .card-header {
            background-color: #7dd3fc; /* Lighter sky blue for card headers */
            color: #0c4a6e; /* Darker sky blue text */
            padding: 1rem 1.5rem; /* 16px 24px */
            border-bottom: 1px solid #bae6fd; /* Even lighter border */
        }
        .step-html-content .card-content {
            padding: 1.5rem; /* 24px */
            color: #374151; /* Gray 700 */
        }
        .step-html-content .card-content ul {
            list-style-type: disc;
            padding-left: 1.5rem; /* 24px */
            margin-top: 0.5rem; /* 8px */
        }
        .step-html-content .card-content li {
            margin-bottom: 0.5rem; /* 8px */
        }
        .step-html-content .highlight {
            color: #0369a1; /* Sky blue 700 */
            font-weight: 600;
        }
        .step-html-content .emphasis {
            font-style: italic;
            color: #0ea5e9; /* Sky blue 500 */
        }
        .step-html-content .key-themes-card {
            background-color: #f0f9ff; /* Very light blue, almost white */
            border: 2px solid #7dd3fc;
        }
        .step-html-content .key-themes-header { /* This is a .card-header inside .key-themes-card */
            background-color: #38bdf8 !important; /* Sky blue 400 - !important to ensure override if needed */
            color: white !important;
        }
        .step-html-content .key-themes-card .card-header h3 { /* Ensure text color is white for key themes header */
             color: white !important;
        }
         .step-html-content .key-themes-card .text-sky-700 { /* Titles within key themes card */
            color: #0369a1; /* Sky blue 700, consistent with highlight */
        }


        /* General prose styles for other pages */
        .prose h3 {
          font-size: 1.5em; /* 24px */
          font-weight: 600;
          margin-top: 1.5em;
          margin-bottom: 0.75em;
          color: #0c4a6e; /* sky-800 */
        }
        .prose p {
          margin-bottom: 1em;
          line-height: 1.6;
        }
        .prose ol {
          list-style-type: decimal;
          margin-left: 1.5em;
          margin-bottom: 1em;
        }
        .prose ol li {
          margin-bottom: 0.5em;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
