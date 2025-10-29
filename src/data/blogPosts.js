export const blogPosts = [

    {
  id: 1,
  slug: "ultimate-color-theory-for-web-designers",
  title: "🎨 Ultimate Color Theory for Web Designers - Complete Guide 2025",
  image: "/images/blog/color-wheel.jpg",
  description: "Master color theory fundamentals, psychology, and practical workflows to create stunning web designs. Learn how to choose perfect color combinations and avoid common mistakes.",
  content: `
    <div class="blog-content">
      <p class="lead">Color is one of the most powerful tools in web design. It influences user emotions, guides actions, and defines brand identity. This comprehensive guide covers everything from color fundamentals to advanced techniques used by professional designers.</p>

      <h2>What You'll Learn</h2>
      <ul>
        <li>The science behind color and how our eyes perceive it</li>
        <li>Color psychology and emotional impact on users</li>
        <li>Practical color harmony rules for web design</li>
        <li>Best tools and workflows for choosing colors</li>
        <li>Common mistakes and how to avoid them</li>
      </ul>

      <h2>Part 1: Understanding Color Fundamentals</h2>
      
      <h3>What Is Color?</h3>
      <p>Color is light reflected at different wavelengths that our eyes perceive. For web designers, colors are represented digitally in several formats:</p>
      <ul>
        <li><strong>HEX codes</strong> (e.g., <code>#FFF255</code>) - Most common for CSS</li>
        <li><strong>RGB values</strong> (e.g., <code>rgb(255, 80, 11)</code>) - Red, Green, Blue channels</li>
        <li><strong>HSL values</strong> (e.g., <code>hsl(9, 100%, 60%)</code>) - Hue, Saturation, Lightness</li>
        <li><strong>RGBA/HSLA</strong> - Same as above but with alpha transparency</li>
      </ul>

      <h3>The Color Wheel</h3>
      <p>The color wheel organizes colors in a circle based on their hue relationships:</p>
      
      <p><strong>Primary Colors:</strong></p>
      <ul>
        <li>Red, Yellow, Blue (traditional color theory)</li>
        <li>Red, Green, Blue (light-based/digital color)</li>
      </ul>

      <p><strong>Secondary Colors:</strong></p>
      <p>Created by mixing two primary colors:</p>
      <ul>
        <li>Orange (Red + Yellow)</li>
        <li>Green (Yellow + Blue)</li>
        <li>Purple (Red + Blue)</li>
      </ul>

      <p><strong>Tertiary Colors:</strong></p>
      <p>Created by mixing primary and secondary colors: Red-orange, Yellow-orange, Yellow-green, Blue-green, Blue-purple, Red-purple</p>

      <h3>Warm vs. Cool Colors</h3>
      
      <p><strong>Warm Colors (Red, Orange, Yellow):</strong></p>
      <ul>
        <li>Energetic and inviting</li>
        <li>Advance visually (appear closer to the viewer)</li>
        <li>Increase perceived temperature</li>
      </ul>

      <p><strong>Cool Colors (Blue, Green, Purple):</strong></p>
      <ul>
        <li>Calming and professional</li>
        <li>Recede visually (appear farther away)</li>
        <li>Decrease perceived temperature</li>
        <li>Best for: Tech companies, healthcare, trustworthy brands</li>
      </ul>


          <div class="color-temperature-examples" style="margin: 30px 0;">
        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px;">Warm Color Palette Example</h4>
          <img src="/images/blog/warm-color.png" alt="Warm colors palette showing red, orange, and yellow tones" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
          <p style="margin-top: 10px; font-size: 14px; color: #666;">Warm colors create energy and excitement, perfect for action-oriented designs</p>
        </div>

        <div style="margin-bottom: 20px;">
          <h4 style="margin-bottom: 10px;">Cool Color Palette Example</h4>
          <img src="/images/blog/cool-color.png" alt="Cool colors palette showing blue, green, and purple tones" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" />
          <p style="margin-top: 10px; font-size: 14px; color: #666;">Cool colors evoke calmness and trust, ideal for professional applications</p>
        </div>
      </div>



      <h2>Part 2: Color Psychology in Web Design</h2>
      <p>Understanding color psychology helps you choose colors that align with your brand message and desired user actions. Here's what different colors communicate:</p>

      <div class="color-psychology">
        <p><strong>🟤 Dark Brown:</strong> Stability, reliability, warmth. Often used in natural or vintage designs.</p>
        
        <p><strong>🟢 Bright Green:</strong> Freshness, growth, eco-friendliness. Signals health and vitality.</p>
        
        <p><strong>🟠 Bright Orange:</strong> Energy, enthusiasm, creativity. Great for calls to action and youth-focused brands.</p>
        
        <p><strong>💚 Neon Green:</strong> Strong visibility and modernity. Popular in tech, gaming, or nightlife themes.</p>
        
        <p><strong>💗 Bright Pink:</strong> Playfulness, emotion, youthfulness. Popular in fashion, beauty, and lifestyle brands.</p>
      </div>

      <h2>Part 3: Practical Color Workflows</h2>
      
      <h3>Starting from Scratch</h3>
      
      <p><strong>Step 1: Define Your Brand Personality</strong></p>
      <p>Ask yourself: Is your brand...</p>
      <ul>
        <li>Professional or playful?</li>
        <li>Luxurious or affordable?</li>
        <li>Bold or subtle?</li>
        <li>Traditional or modern?</li>
      </ul>

      <p><strong>Step 2: Choose Your Primary Color</strong></p>
      <ul>
        <li>Base it on color psychology</li>
        <li>Reflect your brand values</li>
        <li>Differentiate from competitors</li>
      </ul>

      <p><strong>Step 3: Build Your Palette</strong></p>
      <p>Create variations including:</p>
      <ul>
        <li>3-5 shades of your primary color</li>
        <li>1-2 complementary or accent colors</li>
        <li>Neutral colors (grays, white, black)</li>
        <li>Success, warning, and error colors for UI states</li>
      </ul>

      <p><strong>Step 4: Test in Context</strong></p>
      <ul>
        <li>Apply to actual designs</li>
        <li>Check on different screens</li>
        <li>Test with real content</li>
        <li>Verify accessibility standards</li>
      </ul>

      <h2>Part 4: Common Color Mistakes to Avoid</h2>

      <h3>❌ Mistake 1: Too Many Colors</h3>
      <p><strong>Problem:</strong> Using 6+ colors creates visual chaos and confusion.</p>
      <p><strong>Solution:</strong> Stick to 3-5 colors maximum:</p>
      <ul>
        <li>1 primary color</li>
        <li>1-2 secondary colors</li>
        <li>1-2 neutral colors</li>
        <li>UI state colors (success, error, warning)</li>
      </ul>

      <h3>❌ Mistake 2: Not Testing on Different Screens</h3>
      <p><strong>Problem:</strong> Colors look different on various devices and brightness settings.</p>
      <p><strong>Solution:</strong></p>
      <ul>
        <li>Test on multiple monitors</li>
        <li>Check on mobile devices</li>
        <li>Consider different brightness settings</li>
        <li>Account for color profiles</li>
      </ul>

      <h3>❌ Mistake 3: Poor Text Readability</h3>
      <p><strong>Problem:</strong> Fancy color combinations that sacrifice readability.</p>
      <p><strong>Solution:</strong></p>
      <ul>
        <li>Text should always have high contrast</li>
        <li>Use dark text on light backgrounds (or vice versa)</li>
        <li>Avoid pure black on pure white (too harsh)</li>
        <li>Test with real content, not Lorem Ipsum</li>
      </ul>


      <h2>Tools you should explore to get the best color combination</h2>
      <ul>
        <li><a href="/">Color Picker</a> - Find perfect colors visually</li>
        <li><a href="/pages/palettes">Palette Generator</a> - Create harmonious combinations</li>
        <li><a href="/pages/image-color">Image Extractor</a> - Extract colors from photos</li>
        <li><a href="/pages/gradients'">Gradient Maker</a> - Design beautiful gradients</li>
      </ul>

      <h2>Frequently Asked Questions</h2>

      <p><strong>Q: How many colors should I use on my website?</strong></p>
      <p>A: Stick to 3-5 colors: one primary, one or two secondary, and neutrals. More than this creates visual confusion.</p>

      <p><strong>Q: What's the best color for a CTA button?</strong></p>
      <p>A: Orange and red typically convert best, but it depends on your overall color scheme. The CTA should contrast strongly with the background.</p>

      <p><strong>Q: Should my website have a dark mode?</strong></p>
      <p>A: If your audience includes developers, designers, or people who use your site at night, yes. Otherwise, it's optional but increasingly expected.</p>

      <p><strong>Q: How do I choose colors for my brand?</strong></p>
      <p>A: Start with your brand personality and values, then use color psychology to find colors that express those qualities. Test with your target audience.</p>

      <p><strong>Q: Can I use black and white only?</strong></p>
      <p>A: Yes! Monochrome designs can be sophisticated and timeless. Add one accent color for emphasis if needed.</p>

      <h2>Try ColorKits Tools!</h2>
      <p>Ready to put color theory into practice? Use our <a href="/pages/palette-generator">Palette Generator</a> to create harmonious color schemes, or extract colors from images with our <a href="/pages/image-color">Color Extractor</a> tool.</p>

    
    </div>
  `,
  author: "Pankaj Kori",
  date: "2025-10-29",
  category: "Tutorials",
  tags: ["color-theory", "web-design", "color-psychology", "design-fundamentals", "color-palette"],
  readTime: "12 min read",
  featured: true,
},
  
  {
    id: 2,
    slug: "extract-color-from-images",
    title: "🎨 Extract Color Palettes from Photos - Complete Guide 2025",
    image: "/images/blog/nature.jpg",
    description:
      "I will guide you how to extract different colors from images using colorkits online tool. Which is very helpful and very effective for  website designer and developers.   ",
    content: `
    <div class="blog-content">
      <p class="lead">Color extraction from images and giving different color shades it is done by using the process of identifying the most prominent colors from an image. </p>


      <h2>What is Color Extraction? How it get extracted from an image </h2>
      <p>
Lets , understand the algorithm how colors get extracted from an image and provides different  different color shades  which is available  in an image.
This is very helpful for developers and designers who develop the websites. Which give extraordinary experience and provides different color shades.

 </p>

      <div class="color-example">
        <img src="/images/blog/nature.jpg" alt="Colorful nature" style="width: 100%; border-radius: 12px; margin: 20px 0;" />
        <p>Extracted palette:
       <code>#1E1E1E </code>, <code>#1E2828 </code>, <code>#283232 </code>,  <code>#1E1E28 </code> , <code>#28323C </code> , <code>#324646 </code> ,  <code>#283C3C </code> ,  <code>#1E3232 </code>  
        </p>
      
        </div>

        <div>
        
      <h2>How Does It Work? Let, understand the algorithms</h2>
      <p>
       1.Let understand the K-mean  clustering algorithm is unsupervised learning algorithm method that partitions unlabeled data into a pre-defined number of groups, or clusters (k).
      Its follows unsupervised learning which is unlabeled data. Which collect the similar type of particals from randomly selected partterns .

2.Click to browse or drag and drop your image here which supports JPG, PNG, GIF, WebP.
</p>

</div>

      <h2>Use Cases</h2>
      <ul>
        <li>Create the different type of color shades from an image. </li>
        <li>Its supports JPG, PNG, GIF, WebP.</li>
        <li>Extract colors for  CSS , Tailwind, or design systems which help designers to develop webpages.</li>
      </ul>

      <h2>Try It on ColorKits!</h2>
      <p>Upload an image to our <a href="/pages/image-color">Color Extractor</a> and get a palette of dominant colors. You can copy HEX codes,  css code , preview swatches, and even generate Tailwind-compatible classes.</p>

      <h2>Pro Tips</h2>
      <p>✅ Use high-resolution images for better accuracy and results</p>
      <p>✅ Avoid those images which are heavy filtered or overlayed</p>
      <p>✅ Combine extracted palettes with our <a href="/pages/palettes">Palette Generator</a> for even more creative control</p>
    </div>
  `,
    author: "Pankaj Kori",
    date: "2025-10-22",
    category: "Tutorials",
    tags: ["color-extraction", "palette", "design-tools", "shades" , "javascript"],
    readTime: "10 min read",
    featured: true,
  },
  {
  id: 3,
  slug: "Amazing-color-palettes-2025",
  title: "10+ Best Trending Color Palettes for Web Designers 2025",
  image: "/images/blog/color-shades.jpg",
  description: "Before using the different color shades you need to know about color theory in web design.",
  content: `
    <div class="blog-content">
      <p class="lead">I Will guide you how to master the art of color in web design. And how to use tools and apply colors from different palettes to get best color combination.</p>

      <h2>Understanding Different Color Shades</h2>
      <p>Color theory is the fundamental part of web design. which help you to understand how colors work together and make the variety of gradient colors.</p>

      <h2>Best Color Shades of 2025</h2>

      <h3>1. Vibrant Gradient </h3>
      <div style="display: flex; gap: 10px; margin: 20px 0;">
        <div style="background:#0020b1; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background:#8e23f8; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background:#a7b300; flex: 1; height: 80px; border-radius: 8px;"></div>
      </div>
      <p><strong>Colors:</strong> <code>#0020b1</code>, <code>#8e23f8</code>, <code>#a7b300</code></p>
      <p>Perfect for: Product developement, modern apps, startups , UI designs</p>

      <h3>2. Minimalist Mono </h3>
      <div style="display: flex; gap: 10px; margin: 20px 0;">
        <div style="background:#050505; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background:#4a4a4a; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background:#8b8b8b; flex: 1; height: 80px; border-radius: 8px; border: 1px solid #e5e7eb;"></div>
      </div>
      <p><strong>Colors:</strong> <code>#050505</code>, <code>#4a4a4a</code>, <code>#8b8b8b</code></p>
      <p>Perfect for: Luxury brands, portfolios, professional dashboards , UI designs</p>

         <h3>3.Pink Grace Gradient </h3>
      <div style="display: flex; gap: 10px; margin: 20px 0;">
        <div style="background: #B42846; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background: #322850; flex: 1; height: 80px; border-radius: 8px;"></div>
        <div style="background: #FA646E; flex: 1; height: 80px; border-radius: 8px;"></div>
      </div>
      <p><strong>Colors:</strong> <code>#B42846</code>, <code>#322850</code>, <code>#FA646E</code></p>
      <p>Perfect for: SaaS products, startups , dashboards , profiles </p>

      <h2>How to Choose Best Colors </h2>
      <ol>
        <li>Start with your brand topic</li>
        <li>Choose a primary color for your brand</li>
        <li>Select 4-5 complementary colors for varieties </li>
        <li>Add neutral colors like (black, whites , red) for balance</li>
       
      </ol>

      <h2>Tools you should explore to get the best color combination</h2>
      <ul>
        <li><a href="/">Color Picker</a> - Find perfect colors visually</li>
        <li><a href="/pages/palettes">Palette Generator</a> - Create harmonious combinations</li>
        <li><a href="/pages/image-color">Image Extractor</a> - Extract colors from photos</li>
        <li><a href="/pages/gradients'">Gradient Maker</a> - Design beautiful gradients</li>
      </ul>

      <div style="background: linear-gradient(135deg,rgb(130, 153, 255) 0%,rgb(70, 243, 156) 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0;">
        <h2 style="color: white; margin-top: 0;">Start Creating Today Your Website with Best Color Combination !</h2>
        <p style="font-size: 18px;">All our color tools are free to use. No signup required for colorkits.</p>
      </div>
      
    </div>
  `,
  author: "Pankaj Kori",
  date: "2025-10-20",
  category: "Tutorials",
  tags: ["color-theory", "web-design", "palettes", "shades" ,"guide"],
  readTime: "15 min read",
  featured: true,
},

  {
  id: 4,
  slug: "color-contrast-checker-tools",
  title: "Use Different Tools To Get The Best color Combination - Complete Guide 2025",
  image: "/images/blog/color-contrast.png",
  description: "I will guide you how to use different tools from the colorkits website.",
  content: `
    <div class="blog-content">
      <p class="lead">
       When I started designing my very first website , then i had faced a lot of problem while selecting the color combination for for my website.
        Then I searched alot after that i got an idea that i can make a colorkits website which can help me to choose the best color shades , and color palettes for desgining the website .
        so ,today i will guide you how it is actually works and optimised the performance  and saves your time in searching .
      </p>

      <h2>What is  Color Contrast? Why it's matters a lot ! </h2>
      <p>
       Suppose , you are designing a website without a proper color combination like Foreground Color (Text) is red and Background Color is yellow .
       Now you can think how it will look like  it will be frustrating, right? That's what millions 
        of users experience daily when websites ignore contrast ratios.
        why you should choose better contrast ratio here some examples:
      </p>
      <ul>
        <li>When color combination is not good then people faces color blindness</li>
        <li>Users need to used their deep attention to watch the content</li>
        <li>User over 40 faced the vision problem.</li>
      </ul>


      <h2>What is a Contrast Ratio? How to measure!</h2>
      <p>
        I have analysed a contrast ratio measures the difference between foreground (text) and background colors to check the best visibility .
        The  ratio given like 4.51:1, where higher numbers mean better contrast which give provides better results. 
      </p>

      <div class="color-example">
        <img src="/images/blog/contrast-ratio.png" alt="Contrast ratio explanation" style="width: 100%; border-radius: 12px; margin: 20px 0;" />
        <p style="text-align: center; font-style: italic; color: #6b7280;">Example showing a 4.51:1 contrast ratio between orange and white</p>
      </div>

      <h2>WCAG Standards </h2>
      <p>
        The Web Content Accessibility Guidelines (WCAG) set the standards for website designing for the better accessiblity . 
        Here is what you need to know before developing the websites:
      </p>

      <h3>WCAG Standards  2.1 Levels</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <thead>
          <tr style="background: #f3f4f6;">
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Text Type</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">AA (Minimum Exposure)</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">AAA (Highly Enhanced)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Normal Text (under 6px)</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>4.5:1</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>7:1</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Large Text (16px+ or 14px+ bold)</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>3:1</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>4.5:1</strong></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">UI Components & Graphics</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>3:2</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><strong>3:2</strong></td>
          </tr>
        </tbody>
      </table>


      <h2>How to Use ColorKits Contrast Checker 🛠️</h2>
      <p>
       i designed the website which help you to guide seamless properties to use the color contrast . Here you need to follow these 3 steps for better results:
      </p>



      <h3>Step 1: First Choose Your Foreground Color (Text)</h3>
      <p>
        Choose the color of your text or UI element like black for white background or white for black background.:
      </p>
      <ul>
        <li>Click on a color palette board </li>
        <li>Enter a HEX code (like <code>#333333</code>)</li>
        <li>Use the color picker to find the perfect shade for your website </li>
      </ul>

      <h3>Step 2: Choose Your Background Color</h3>
      <p>
        Choose your background color using the same methods. which will blend the perfect contrast ratio:
      </p>
      <ul>
        <li><code>#FFFFFF</code> - White (mostly we prefer)</li>
        <li><code>#000000</code> - Black (if foreground is white color)</li>
        <li><code>#F3F4F6</code> - Light gray</li>
        <li>You can  custom your brand color</li>
      </ul>

      <h3>Step 3: Check the Results</h3>
      <p>
        The tool shows you the best approch:
      </p>
      <ul>
        <li><strong>Contrast Ratio</strong> - The numerical ratio (e.g., 4.51:1)</li>
        <li><strong>Pass/Fail Status</strong> - Green checkmark ✅ or red X ❌ for each WCAG level</li>
        <li><strong>Text Size Requirements</strong> - What sizes work for your combination</li>
        <li><strong>Live Preview</strong> - you can check your text color and background color in preview </li>
      </ul>

      <div class="color-example">
        <img src="/images/blog/color-contrast.png" alt="Contrast checker results showing pass/fail" style="width: 100%; border-radius: 12px; margin: 20px 0;" />
        <p style="text-align: center; font-style: italic; color: #6b7280;">Results showing which WCAG levels pass or fail</p>
      </div>

      <h2>Real-World Examples</h2>

      <h3>Good Contrast Examples</h3>
      <div style="display: grid; grid-template-columns: 1fr; gap: 15px; margin: 20px 0;">
        <div style="background:rgb(235, 235, 235); color:rgb(14, 13, 13); padding: 20px; border-radius: 8px; border: 2px solid #10b981;">
          <p style="margin: 0; font-size: 16px;"><strong>Black on White</strong> - 21:1 ratio ✅</p>
          <p style="margin: 8px 0 0 0; font-size: 14px;">Perfect for body text - works everywhere</p>
        </div>
        <div style="background: #1F2937; color: #FFFFFF; padding: 20px; border-radius: 8px; border: 2px solid #10b981;">
          <p style="margin: 0; font-size: 16px;"><strong>White on Dark Gray</strong> - 16.1:1 ratio ✅</p>
          <p style="margin: 8px 0 0 0; font-size: 14px;">Great for dark mode interfaces</p>
        </div>
        <div style="background: #FFFFFF; color:rgb(31, 88, 209); padding: 20px; border-radius: 8px; border: 2px solid #10b981;">
          <p style="margin: 0; font-size: 16px;"><strong>Blue on White</strong> - 8.6:1 ratio ✅</p>
          <p style="margin: 8px 0 0 0; font-size: 14px;">Perfect for links and buttons</p>
        </div>
      </div>


      <h2>Some Tips from my experience which help to use the tool</h2>

      <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
   
        <h3>Point 1: Start with Black and White</h3>
        <p>Design your websites in black and white first.  it will be in readable form.</p>

        <h3>Point 2: Dark Mode Requires Different Colors</h3>
        <p>Colors that work on white backgrounds often fail on dark backgrounds. Always test both! test both the color combinations</p>

        <h3>Point 3: Bigger Text = More Flexibility</h3>
        <p>Large text 16px+ only needs 3:1 ratio. Use this for headings and paragraphs with different color rich palettes.</p>
      </div>

      <h2>Visit  to Contrast Checker Now! </h2>
      <p>
         if you want best color and feature rich then visit to our <a href="/tools/contrast-checker">Color Contrast Checker</a> to test 
        your color combinations instantly. It's free, no signup required!
      </p>

      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px; text-align: center; margin: 30px 0;">
        <h2 style="color: white; margin-top: 0;">Check Your Colors Now</h2>
        <p style="font-size: 18px; margin-bottom: 20px;">Ensure your website is accessible to everyone</p>
        <a href="/tools/contrast-checker" style="background: white; color: #667eea; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Open Contrast Checker →</a>
      </div>

      <h2>Other Helpful ColorKits Tools 🛠️</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h3>Color Picker</h3>
          <p style="margin-bottom: 10px;">Find the perfect colors shades</p>
          <a href="/" style="color: #8b5cf6; font-weight: bold;">Try it →</a>
        </div>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h3>Palette Generator</h3>
          <p style="margin-bottom: 10px;">Find best color combinations</p>
          <a href="/pages/palettes" style="color: #8b5cf6; font-weight: bold;">Try it →</a>
        </div>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
          <h3>Color extractor from image </h3>
          <p style="margin-bottom: 10px;">Extract multiple color shades from any images </p>
          <a href="/pages/image-color" style="color: #8b5cf6; font-weight: bold;">Try it →</a>
        </div>
      </div>

  `,
  author: "Pankaj Kori",
  date: "2025-10-20",
  category: "Tutorials",
  tags: ["contrast", "accessibility", "wcag", "web-design", "a11y", "tools"],
  readTime: "10 min read",
  featured: true,
}
  
];
