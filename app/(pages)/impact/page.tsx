'use client';

import { useState } from 'react';
import { 
  Heart, ArrowRight, TrendingUp, Users, Globe, Target,
  MapPin, Calendar, CheckCircle, Quote, BarChart,
  DollarSign, BookOpen, Stethoscope, Sprout, Award,
  Eye, Download, Share2, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

export default function ImpactCaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const filters = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'education', label: 'Education' },
    { id: 'health', label: 'Healthcare' },
    { id: 'agriculture', label: 'Agriculture' },
    { id: 'water', label: 'Water & Sanitation' },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Transforming Education in Rural Kenya',
      category: 'education',
      location: 'Kisumu County, Kenya',
      duration: '2021 - 2024',
      budget: '$250,000',
      beneficiaries: 1200,
      featured: true,
      hero: 'Meet Grace, a 14-year-old who became the first person in her village to attend secondary school.',
      challenge: 'In Kisumu County, 65% of children were not completing primary education due to lack of schools, qualified teachers, and families unable to afford school fees and supplies.',
      solution: 'We partnered with local communities to build 5 primary schools, train 25 teachers, and establish a scholarship program covering fees, uniforms, books, and meals for vulnerable students.',
      outcomes: [
        { metric: '1,200 students', description: 'Now enrolled and attending school regularly' },
        { metric: '95% retention', description: 'Students completing the full academic year' },
        { metric: '78% improvement', description: 'In literacy and numeracy test scores' },
        { metric: '25 teachers', description: 'Trained in modern pedagogy and student-centered learning' },
      ],
      impact: 'School enrollment in target villages increased from 35% to 92%. Girls\' enrollment specifically rose by 110%, breaking generational barriers to education.',
      testimonial: {
        quote: 'Before the school was built, I had to walk 12 kilometers each day. Many days I couldn\'t go because of rain or helping my mother. Now I walk 10 minutes, and I\'m learning every day. I want to become a teacher.',
        author: 'Grace Achieng',
        role: 'Student, Grade 8',
        image: 'student'
      },
      sustainability: 'All schools now have active Parent-Teacher Associations managing operations. Local government has committed to funding teacher salaries. The community has ownership and pride in their schools.',
      lessons: [
        'Community leadership from day one ensures long-term sustainability',
        'Girls\' education requires addressing cultural barriers, not just infrastructure',
        'Teacher training is as important as building classrooms',
        'Scholarship programs must cover all costs, not just tuition',
      ],
      media: {
        photos: 24,
        videos: 3,
        reports: 2
      }
    },
    {
      id: 2,
      title: 'Mobile Health Clinics Reach Remote Islands',
      category: 'health',
      location: 'Mindanao, Philippines',
      duration: '2022 - Present',
      budget: '$180,000',
      beneficiaries: 8500,
      featured: true,
      hero: 'Maria\'s daughter was born healthy because, for the first time, prenatal care came to her island.',
      challenge: 'Island communities in Mindanao had no access to healthcare. The nearest hospital was a 6-hour boat ride away, costing more than a month\'s income. Maternal mortality was 8x the national average.',
      solution: 'We launched 3 mobile health clinics operated by trained nurse-midwives, visiting each island monthly. Services include prenatal care, child vaccinations, basic medical treatment, and health education.',
      outcomes: [
        { metric: '8,500 patients', description: 'Treated through mobile clinic visits' },
        { metric: '95% vaccination', description: 'Coverage for children under 5' },
        { metric: '340 safe deliveries', description: 'With trained midwife assistance' },
        { metric: '0 maternal deaths', description: 'Since program launch in participating communities' },
      ],
      impact: 'Infant mortality decreased by 73% in program areas. Women now receive an average of 6 prenatal visits compared to zero before the program.',
      testimonial: {
        quote: 'When I was pregnant with my first child, there was no help. I gave birth alone and my baby didn\'t survive. With my second pregnancy, the clinic nurses visited every month. They taught me, cared for me, and my daughter was born healthy. She just turned two.',
        author: 'Maria Santos',
        role: 'Mother of two',
        image: 'mother'
      },
      sustainability: 'Local health workers trained to run clinics independently. Government has committed to fuel costs. Communities contribute to maintenance through volunteer work and small fees for those who can pay.',
      lessons: [
        'Regular visits build trust and ensure continuity of care',
        'Training local staff creates jobs and ensures cultural competence',
        'Mobile clinics must be integrated with existing health systems',
        'Community health education is as important as medical services',
      ],
      media: {
        photos: 18,
        videos: 4,
        reports: 3
      }
    },
    {
      id: 3,
      title: 'Sustainable Farming Doubles Family Income',
      category: 'agriculture',
      location: 'Amazon Basin, Peru',
      duration: '2023 - Present',
      budget: '$120,000',
      beneficiaries: 450,
      featured: false,
      hero: 'Carlos now earns twice as much while protecting the rainforest his family has lived in for generations.',
      challenge: 'Smallholder farmers in the Amazon were trapped in a cycle of poverty, using slash-and-burn agriculture that degraded the forest while producing minimal yields and income.',
      solution: 'We introduced agroforestry techniques combining traditional crops with native fruit trees, organic farming methods, and connected farmers to fair-trade markets for their produce.',
      outcomes: [
        { metric: '450 farmers', description: 'Trained in sustainable agroforestry practices' },
        { metric: '30% higher yields', description: 'Average increase in crop production' },
        { metric: '85% income growth', description: 'Through better yields and market access' },
        { metric: '1,200 hectares', description: 'Of forest preserved through new practices' },
      ],
      impact: 'Forest cover in program areas increased by 12% as farmers adopted tree-planting. Average family income rose from $1,200 to $2,200 annually.',
      testimonial: {
        quote: 'My father and grandfather farmed by cutting and burning. We worked hard but stayed poor. Now I grow the same crops under fruit trees. The trees give us income too. My children will inherit a forest, not a wasteland.',
        author: 'Carlos Mendoza',
        role: 'Farmer & Cooperative Leader',
        image: 'farmer'
      },
      sustainability: 'Five farmer cooperatives now operate independently, managing organic certification and market relationships. Young farmers are returning to agriculture, reversing rural exodus.',
      lessons: [
        'Environmental conservation and economic development can go hand-in-hand',
        'Market access is as important as production techniques',
        'Cooperatives provide economies of scale for small farmers',
        'Respecting traditional knowledge while introducing innovation',
      ],
      media: {
        photos: 32,
        videos: 2,
        reports: 1
      }
    },
    {
      id: 4,
      title: 'Clean Water Reduces Illness by 80%',
      category: 'water',
      location: 'Northern Ghana',
      duration: '2020 - 2024',
      budget: '$200,000',
      beneficiaries: 2500,
      featured: false,
      hero: 'Akua\'s children no longer miss school due to waterborne illness.',
      challenge: 'Families in remote villages spent 4-6 hours daily fetching water from contaminated sources. Waterborne illness was the leading cause of child mortality. Girls missed school to help collect water.',
      solution: 'We drilled 25 boreholes with hand pumps, built sanitation facilities, and trained community members in water system maintenance and hygiene practices.',
      outcomes: [
        { metric: '2,500 households', description: 'Now have access to clean water within 500 meters' },
        { metric: '80% reduction', description: 'In waterborne illness cases' },
        { metric: '4 hours saved', description: 'Daily per family, redirected to education and income' },
        { metric: '65% increase', description: 'In girls\' school attendance' },
      ],
      impact: 'Child mortality from diarrheal diseases dropped by 82% in program villages. School attendance for girls increased as they no longer needed to fetch water.',
      testimonial: {
        quote: 'Before, my children were sick every month. We spent all our money on medicine. I walked hours every day for dirty water. Now the well is near. My children are healthy and in school. I have time to farm and sell at market.',
        author: 'Akua Mensah',
        role: 'Mother & Market Vendor',
        image: 'community'
      },
      sustainability: 'Each well has a trained maintenance committee funded by small community contributions. Spare parts depot established at district level. Government provides technical backup.',
      lessons: [
        'Water access transforms health, education, and economic opportunity',
        'Community ownership of infrastructure ensures long-term maintenance',
        'Hygiene education must accompany infrastructure for full impact',
        'Women\'s time savings create cascading economic benefits',
      ],
      media: {
        photos: 28,
        videos: 2,
        reports: 2
      }
    },
  ];

  const filteredCases = caseStudies.filter(study => 
    activeFilter === 'all' || study.category === activeFilter
  );

  const impactMetrics = [
    { icon: Users, number: '50,000+', label: 'Lives Directly Impacted', color: 'emerald' },
    { icon: Globe, number: '120', label: 'Communities Transformed', color: 'blue' },
    { icon: TrendingUp, number: '93%', label: 'Program Sustainability Rate', color: 'orange' },
    { icon: Award, number: '15', label: 'Years of Proven Impact', color: 'rose' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
     
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-neutral-50">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 border border-neutral-300 text-xs text-neutral-600 tracking-widest font-light mb-8">
              IMPACT & CASE STUDIES
            </div>
            <h1 className="text-6xl md:text-7xl font-light mb-8 leading-none tracking-tight text-[#0F4C3A]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Stories of
              <br />
              Transformation
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
              In-depth case studies showcasing the measurable impact of our programs 
              and the communities they serve
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, idx) => (
              <div key={idx} className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className={`w-12 h-12 bg-${metric.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
                </div>
                <div className="text-4xl font-light text-[#0F4C3A] mb-2"
                     style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  {metric.number}
                </div>
                <div className="text-xs text-neutral-500 tracking-wider uppercase font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg border-2 text-sm font-light tracking-wide transition-all ${
                  activeFilter === filter.id
                    ? 'border-[#0F4C3A] bg-[#0F4C3A]/5 text-[#0F4C3A]'
                    : 'border-neutral-200 text-neutral-600 hover:border-neutral-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-16">
            {filteredCases.map((study, idx) => (
              <div key={study.id} className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-xl transition-all">
                {/* Case Study Header */}
                <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8F4] p-12 border-b border-neutral-200 relative">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle, #0F4C3A 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  <div className="relative z-10">
                    {study.featured && (
                      <div className="inline-block px-3 py-1 bg-[#0F4C3A] text-white text-xs font-light tracking-wide rounded-full mb-4">
                        Featured Case Study
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between gap-8 mb-6">
                      <div className="flex-1">
                        <h2 className="text-4xl font-light mb-4 text-[#0F4C3A]"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                          {study.title}
                        </h2>
                        <p className="text-lg text-neutral-600 font-light italic mb-6">
                          {study.hero}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-[#0F4C3A]/60" />
                        <div>
                          <div className="text-xs text-neutral-500 font-light uppercase tracking-wider">Location</div>
                          <div className="text-sm text-neutral-700 font-light">{study.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#0F4C3A]/60" />
                        <div>
                          <div className="text-xs text-neutral-500 font-light uppercase tracking-wider">Duration</div>
                          <div className="text-sm text-neutral-700 font-light">{study.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-[#0F4C3A]/60" />
                        <div>
                          <div className="text-xs text-neutral-500 font-light uppercase tracking-wider">Investment</div>
                          <div className="text-sm text-neutral-700 font-light">{study.budget}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-[#0F4C3A]/60" />
                        <div>
                          <div className="text-xs text-neutral-500 font-light uppercase tracking-wider">Beneficiaries</div>
                          <div className="text-sm text-neutral-700 font-light">{study.beneficiaries.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-12">
                  {/* Challenge */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      The Challenge
                    </h3>
                    <p className="text-neutral-600 leading-relaxed font-light">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Our Approach
                    </h3>
                    <p className="text-neutral-600 leading-relaxed font-light">
                      {study.solution}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Measurable Outcomes
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {study.outcomes.map((outcome, i) => (
                        <div key={i} className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                          <div className="text-3xl font-light text-[#0F4C3A] mb-2"
                               style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            {outcome.metric}
                          </div>
                          <div className="text-sm text-neutral-600 font-light">
                            {outcome.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overall Impact */}
                  <div className="mb-12 bg-[#E8F5E9] p-8 rounded-lg">
                    <div className="flex items-start gap-4">
                      <Target className="w-6 h-6 text-[#0F4C3A] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-light mb-3 text-[#0F4C3A]"
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                          Overall Impact
                        </h3>
                        <p className="text-neutral-700 leading-relaxed font-light">
                          {study.impact}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mb-12 bg-neutral-50 p-8 rounded-lg border border-neutral-200">
                    <Quote className="w-10 h-10 text-[#0F4C3A]/20 mb-6" />
                    <p className="text-lg text-neutral-700 leading-relaxed font-light italic mb-6">
                      "{study.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0F4C3A] to-[#1A5744] rounded-full flex items-center justify-center text-white text-xl font-light"
                           style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        {study.testimonial.author[0]}
                      </div>
                      <div>
                        <div className="font-light text-[#0F4C3A]">{study.testimonial.author}</div>
                        <div className="text-sm text-neutral-500 font-light">{study.testimonial.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Sustainability */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-4 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Long-Term Sustainability
                    </h3>
                    <p className="text-neutral-600 leading-relaxed font-light">
                      {study.sustainability}
                    </p>
                  </div>

                  {/* Lessons Learned */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-light mb-6 text-[#0F4C3A]"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Key Lessons
                    </h3>
                    <div className="space-y-3">
                      {study.lessons.map((lesson, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#0F4C3A] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-neutral-600 leading-relaxed font-light">
                            {lesson}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 pt-8 border-t border-neutral-200">
                    <button className="px-6 py-3 bg-[#0F4C3A] text-white text-sm font-light tracking-wide hover:bg-[#1A5744] transition-all rounded-lg flex items-center">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full Case Study
                    </button>
                    <button className="px-6 py-3 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all text-sm font-light rounded-lg flex items-center">
                      <Eye className="w-4 h-4 mr-2" />
                      View Media ({study.media.photos} photos, {study.media.videos} videos)
                    </button>
                    <button className="px-6 py-3 border border-neutral-300 text-neutral-600 hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all text-sm font-light rounded-lg flex items-center">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Story
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F4C3A]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <BarChart className="w-12 h-12 text-white/80 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Create Your Own Impact Story
          </h2>
          <p className="text-lg text-[#E8F5E9] mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join us in transforming communities. Your support creates stories like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#0F4C3A] text-sm font-light tracking-wide hover:bg-neutral-100 transition-all duration-300 rounded-lg flex items-center justify-center">
              Support Our Programs
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
            <button className="px-8 py-3 border border-white/20 text-white text-sm font-light tracking-wide hover:bg-white/10 transition-all duration-300 rounded-lg">
              Download Impact Report 2025
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}