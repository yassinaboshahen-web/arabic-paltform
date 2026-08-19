import React, { useState, useMemo, useRef } from 'react';
import { POPULAR_COURSES } from '../data/coursesData';
import { ExploreHero } from '../components/explore/ExploreHero';
import { SearchBar } from '../components/explore/SearchBar';
import { CategoryNavigation } from '../components/explore/CategoryNavigation';
import { FeaturedEditorialCourses } from '../components/explore/FeaturedEditorialCourses';
import { FilterBar } from '../components/explore/FilterBar';
import { FilterDrawer } from '../components/explore/FilterDrawer';
import { CourseLibrary } from '../components/explore/CourseLibrary';
import { RecommendationSection } from '../components/explore/RecommendationSection';
import { ExploreFinalCTA } from '../components/explore/ExploreFinalCTA';

interface ExplorePageProps {
  onOpenCourse: (courseId: string) => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({ onOpenCourse }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const librarySectionRef = useRef<HTMLDivElement>(null);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('all');
    setLevelFilter('all');
    setDurationFilter('all');
    setRatingFilter('all');
    setSortBy('popular');
  };

  const scrollToCourses = () => {
    librarySectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filter and Sort Courses
  const filteredCourses = useMemo(() => {
    let result = [...POPULAR_COURSES];

    // 1. Text Search Filter (Title, Description, Category, Topics)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.categoryArabic.toLowerCase().includes(q) ||
          c.topics.some((t) => t.toLowerCase().includes(q))
      );
    }

    // 2. Category Tab Filter
    if (activeCategory !== 'all') {
      result = result.filter((c) => {
        if (activeCategory === 'grammar') return c.category === 'grammar' || c.categoryArabic.includes('النحو');
        if (activeCategory === 'rhetoric') return c.category === 'rhetoric' || c.categoryArabic.includes('البلاغة');
        if (activeCategory === 'reading') return c.category === 'reading' || c.categoryArabic.includes('القراءة');
        if (activeCategory === 'writing') return c.category === 'writing' && c.categoryArabic.includes('التعبير');
        if (activeCategory === 'spelling') return c.categoryArabic.includes('الإملاء');
        if (activeCategory === 'skills') return c.categoryArabic.includes('مهارات');
        return true;
      });
    }

    // 3. Level Filter
    if (levelFilter !== 'all') {
      result = result.filter((c) => c.level === levelFilter);
    }

    // 4. Duration Filter
    if (durationFilter !== 'all') {
      if (durationFilter === '2-5') {
        result = result.filter((c) => c.durationHours >= 2 && c.durationHours <= 5);
      } else if (durationFilter === '5+') {
        result = result.filter((c) => c.durationHours > 5);
      }
    }

    // 5. Rating Filter
    if (ratingFilter !== 'all') {
      const minRating = parseFloat(ratingFilter);
      result = result.filter((c) => c.rating >= minRating);
    }

    // 6. Sorting
    if (sortBy === 'top-rated') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'newest') {
      result.sort((a, b) => b.lessonsCount - a.lessonsCount);
    } else {
      // popular
      result.sort((a, b) => (b.studentsCount || 0) - (a.studentsCount || 0));
    }

    return result;
  }, [searchQuery, activeCategory, levelFilter, durationFilter, ratingFilter, sortBy]);

  return (
    <div className="min-h-screen bg-[#070707] text-[#F5F1E8]">
      
      {/* 1. Explore Hero Section */}
      <ExploreHero onExploreClick={scrollToCourses} />

      {/* 2. Sticky Search & Category Navigation Bar Container */}
      <section className="bg-[#070707] border-b border-[#292521]/60 py-6 sticky top-20 z-20 backdrop-blur-md bg-[#070707]/90 text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          {/* Search Input */}
          <SearchBar
            query={searchQuery}
            onQueryChange={(q) => setSearchQuery(q)}
            onClear={() => setSearchQuery('')}
          />

          {/* Clean Editorial Category Tabs */}
          <CategoryNavigation
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId);
            }}
          />
        </div>
      </section>

      {/* 3. Featured Editorial Courses (Shown when not filtering actively or on default browse) */}
      {!searchQuery && activeCategory === 'all' && (
        <FeaturedEditorialCourses onOpenCourse={onOpenCourse} />
      )}

      {/* 4. Filter Toolbar & Course Library */}
      <div ref={librarySectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <FilterBar
          levelFilter={levelFilter}
          setLevelFilter={setLevelFilter}
          durationFilter={durationFilter}
          setDurationFilter={setDurationFilter}
          ratingFilter={ratingFilter}
          setRatingFilter={setRatingFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onReset={handleResetFilters}
          totalResults={filteredCourses.length}
          onOpenMobileDrawer={() => setIsFilterDrawerOpen(true)}
        />
      </div>

      <CourseLibrary
        courses={filteredCourses}
        onOpenCourse={onOpenCourse}
        onResetFilters={handleResetFilters}
      />

      {/* 5. Recommendation Section */}
      <RecommendationSection onOpenCourse={onOpenCourse} />

      {/* 6. Final CTA Section */}
      <ExploreFinalCTA onScrollToCourses={scrollToCourses} />

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        levelFilter={levelFilter}
        setLevelFilter={setLevelFilter}
        durationFilter={durationFilter}
        setDurationFilter={setDurationFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleResetFilters}
        totalResults={filteredCourses.length}
      />

    </div>
  );
};
