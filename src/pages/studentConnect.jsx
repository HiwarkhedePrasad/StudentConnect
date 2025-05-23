import React, { useState, useEffect } from "react";

const StudentConnectApp = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingBoxes = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="absolute w-6 h-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-purple-500/30 hover:bg-gradient-to-br hover:from-purple-400/40 hover:to-pink-400/40 cursor-pointer"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        transform: `rotate(${Math.random() * 45}deg)`,
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = `rotate(${
          Math.random() * 45
        }deg) translateZ(20px) scale(1.2)`;
        e.target.style.boxShadow = "0 20px 40px rgba(139, 92, 246, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = `rotate(${
          Math.random() * 45
        }deg) translateZ(0px) scale(1)`;
        e.target.style.boxShadow = "0 0 0 rgba(139, 92, 246, 0)";
      }}
    />
  ));

  const NavigationBar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl">StudentConnect</span>
        </div>
        <div className="flex gap-6">
          {[
            { id: "home", label: "Home" },
            { id: "explore", label: "Explore" },
            { id: "profile", label: "Profile" },
            { id: "projects", label: "Projects" },
            { id: "messages", label: "Messages" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 pt-24">
      <div
        className={`mb-8 transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
        </div>
      </div>

      <div
        className={`text-center mb-6 transform transition-all duration-1000 delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          Student
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <div
        className={`text-center mb-12 transform transition-all duration-1000 delay-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed max-w-4xl">
          Where brilliant minds unite. Connect with peers, collaborate on
          groundbreaking projects,
          <br className="hidden md:block" />
          and unlock your limitless potential together.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {[
          { number: "10K+", label: "Active Students" },
          { number: "500+", label: "Universities" },
          { number: "1M+", label: "Connections Made" },
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-300 mt-2">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <button
          onClick={() => setCurrentPage("explore")}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="relative flex items-center gap-3">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Explore Peers
          </span>
        </button>

        <button
          onClick={() => setCurrentPage("profile")}
          className="group relative px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
        >
          <span className="relative flex items-center gap-3">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Create Profile
          </span>
        </button>
      </div>
    </div>
  );

  const ExplorePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("all");

    const peers = [
      {
        id: 1,
        name: "Alex Chen",
        university: "MIT",
        major: "Computer Science",
        skills: ["React", "Python", "AI"],
        avatar: "👨‍💻",
        rating: 4.9,
        projects: 12,
      },
      {
        id: 2,
        name: "Sarah Johnson",
        university: "Stanford",
        major: "Data Science",
        skills: ["Machine Learning", "R", "Statistics"],
        avatar: "👩‍🔬",
        rating: 4.8,
        projects: 8,
      },
      {
        id: 3,
        name: "Marcus Rodriguez",
        university: "Berkeley",
        major: "Electrical Engineering",
        skills: ["Arduino", "C++", "IoT"],
        avatar: "⚡",
        rating: 4.7,
        projects: 15,
      },
      {
        id: 4,
        name: "Emma Thompson",
        university: "Harvard",
        major: "Business Analytics",
        skills: ["Excel", "SQL", "Tableau"],
        avatar: "📊",
        rating: 4.9,
        projects: 10,
      },
      {
        id: 5,
        name: "David Kim",
        university: "Caltech",
        major: "Robotics",
        skills: ["ROS", "Python", "3D Modeling"],
        avatar: "🤖",
        rating: 4.6,
        projects: 18,
      },
      {
        id: 6,
        name: "Lisa Wang",
        university: "CMU",
        major: "UX Design",
        skills: ["Figma", "Sketch", "User Research"],
        avatar: "🎨",
        rating: 4.8,
        projects: 7,
      },
    ];

    return (
      <div className="min-h-screen p-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Discover Amazing Peers
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with brilliant minds from top universities around the
              world
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by name, university, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg
                className="absolute right-4 top-4 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex gap-3">
              {["all", "CS", "Engineering", "Design", "Business"].map(
                (filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                      selectedFilter === filter
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {filter === "all" ? "All" : filter}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Peers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peers.map((peer, index) => (
              <div
                key={peer.id}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3">{peer.avatar}</div>
                  <h3 className="text-xl font-bold text-white">{peer.name}</h3>
                  <p className="text-purple-300">{peer.university}</p>
                  <p className="text-gray-400">{peer.major}</p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Rating</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white font-semibold">
                        {peer.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Projects</span>
                    <span className="text-white font-semibold">
                      {peer.projects}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {peer.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full text-xs text-white border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const ProfilePage = () => {
    const [formData, setFormData] = useState({
      name: "",
      university: "",
      major: "",
      year: "",
      bio: "",
      skills: [],
      interests: [],
      avatar: "👤",
    });

    const [currentSkill, setCurrentSkill] = useState("");
    const [currentInterest, setCurrentInterest] = useState("");

    const avatarOptions = [
      "👨‍💻",
      "👩‍💻",
      "👨‍🔬",
      "👩‍🔬",
      "👨‍🎨",
      "👩‍🎨",
      "👨‍💼",
      "👩‍💼",
      "🧑‍🚀",
      "👩‍🚀",
    ];

    const addSkill = () => {
      if (currentSkill && !formData.skills.includes(currentSkill)) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, currentSkill],
        }));
        setCurrentSkill("");
      }
    };

    const addInterest = () => {
      if (currentInterest && !formData.interests.includes(currentInterest)) {
        setFormData((prev) => ({
          ...prev,
          interests: [...prev.interests, currentInterest],
        }));
        setCurrentInterest("");
      }
    };

    const removeSkill = (skill) => {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((s) => s !== skill),
      }));
    };

    const removeInterest = (interest) => {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }));
    };

    return (
      <div className="min-h-screen p-6 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Create Your Profile
            </h1>
            <p className="text-xl text-gray-300">
              Let others discover the amazing person you are!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Avatar Selection */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Choose Avatar
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {avatarOptions.map((avatar, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, avatar }))
                        }
                        className={`text-4xl p-3 rounded-2xl transition-all duration-300 ${
                          formData.avatar === avatar
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-110"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        {avatar}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Basic Info */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    University
                  </label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        university: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your university"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Major
                    </label>
                    <input
                      type="text"
                      value={formData.major}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          major: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Your major"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Year
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          year: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select Year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Bio
                  </label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, bio: e.target.value }))
                    }
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Skills
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentSkill}
                      onChange={(e) => setCurrentSkill(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Add a skill"
                      onKeyPress={(e) => e.key === "Enter" && addSkill()}
                    />
                    <button
                      onClick={addSkill}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full text-sm text-white border border-white/20 flex items-center gap-2"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="text-red-400 hover:text-red-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">
                    Interests
                  </label>
                  <div className="flex gap-2 mb-3">
                    <input
                      type="text"
                      value={currentInterest}
                      onChange={(e) => setCurrentInterest(e.target.value)}
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Add an interest"
                      onKeyPress={(e) => e.key === "Enter" && addInterest()}
                    />
                    <button
                      onClick={addInterest}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full text-sm text-white border border-white/20 flex items-center gap-2"
                      >
                        {interest}
                        <button
                          onClick={() => removeInterest(interest)}
                          className="text-red-400 hover:text-red-300"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Create Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProjectsPage = () => {
    const [activeTab, setActiveTab] = useState("browse");

    const projects = [
      {
        id: 1,
        title: "AI-Powered Study Assistant",
        description:
          "Building an intelligent tutoring system using machine learning to help students with personalized learning paths.",
        tags: ["AI", "Python", "Machine Learning"],
        author: "Alex Chen",
        members: 3,
        looking: 2,
        difficulty: "Advanced",
        duration: "3 months",
        icon: "🤖",
      },
      {
        id: 2,
        title: "Sustainable Campus Initiative",
        description:
          "Developing a comprehensive sustainability tracking app for university campuses to reduce carbon footprint.",
        tags: ["React", "Node.js", "Environment"],
        author: "Emma Thompson",
        members: 2,
        looking: 3,
        difficulty: "Intermediate",
        duration: "2 months",
        icon: "🌱",
      },
      {
        id: 3,
        title: "VR Learning Platform",
        description:
          "Creating immersive virtual reality experiences for medical students to practice surgical procedures.",
        tags: ["Unity", "C#", "VR"],
        author: "Marcus Rodriguez",
        members: 4,
        looking: 1,
        difficulty: "Advanced",
        duration: "4 months",
        icon: "🥽",
      },
      {
        id: 4,
        title: "Social Impact Tracker",
        description:
          "Mobile app to track and gamify volunteer work and social impact activities for students.",
        tags: ["React Native", "Firebase", "Social Good"],
        author: "Sarah Johnson",
        members: 2,
        looking: 2,
        difficulty: "Beginner",
        duration: "6 weeks",
        icon: "❤️",
      },
    ];

    return (
      <div className="min-h-screen p-6 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Collaborative Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join exciting projects or start your own. Build amazing things
              together!
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
              {[
                { id: "browse", label: "Browse Projects", icon: "🔍" },
                { id: "create", label: "Create Project", icon: "✨" },
                { id: "my", label: "My Projects", icon: "📋" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Browse Projects Tab */}
          {activeTab === "browse" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-purple-300">by {project.author}</p>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.difficulty === "Beginner"
                          ? "bg-green-500/30 text-green-300"
                          : project.difficulty === "Intermediate"
                          ? "bg-yellow-500/30 text-yellow-300"
                          : "bg-red-500/30 text-red-300"
                      }`}
                    >
                      {project.difficulty}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-xs text-white border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-4">
                      <span>👥 {project.members} members</span>
                      <span>🔍 Looking for {project.looking}</span>
                    </div>
                    <span>⏱️ {project.duration}</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300">
                    Join Project
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Create Project Tab */}
          {activeTab === "create" && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Start a New Project
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter your project title"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Description
                    </label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none"
                      placeholder="Describe your project and what you're trying to achieve..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Difficulty Level
                      </label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="">Select difficulty</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">
                        Expected Duration
                      </label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                        <option value="">Select duration</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      Looking for team members
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="How many team members do you need?"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      Create Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* My Projects Tab */}
          {activeTab === "my" && (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Projects
              </h3>
              <p className="text-gray-400 mb-8">
                You haven't created any projects yet. Start building something
                amazing!
              </p>
              <button
                onClick={() => setActiveTab("create")}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                Create Your First Project
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MessagesPage = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messageInput, setMessageInput] = useState("");

    const conversations = [
      {
        id: 1,
        name: "Alex Chen",
        avatar: "👨‍💻",
        lastMessage: "Hey! I saw your AI project, would love to collaborate!",
        time: "2m ago",
        unread: 2,
        online: true,
      },
      {
        id: 2,
        name: "Sarah Johnson",
        avatar: "👩‍🔬",
        lastMessage: "The data analysis looks great! Can we schedule a call?",
        time: "1h ago",
        unread: 0,
        online: true,
      },
      {
        id: 3,
        name: "Marcus Rodriguez",
        avatar: "⚡",
        lastMessage: "Thanks for the Arduino tutorial!",
        time: "3h ago",
        unread: 1,
        online: false,
      },
      {
        id: 4,
        name: "Emma Thompson",
        avatar: "📊",
        lastMessage: "Looking forward to our project presentation",
        time: "1d ago",
        unread: 0,
        online: false,
      },
    ];

    const messages = selectedChat
      ? [
          {
            id: 1,
            sender: "other",
            text: "Hey! I saw your AI project, would love to collaborate!",
            time: "10:30 AM",
          },
          {
            id: 2,
            sender: "me",
            text: "That sounds amazing! What's your background in AI?",
            time: "10:32 AM",
          },
          {
            id: 3,
            sender: "other",
            text: "I've been working with TensorFlow and PyTorch for about 2 years. Currently studying ML at MIT.",
            time: "10:35 AM",
          },
          {
            id: 4,
            sender: "me",
            text: "Perfect! I think your expertise would be incredibly valuable for this project.",
            time: "10:37 AM",
          },
          {
            id: 5,
            sender: "other",
            text: "Absolutely! When can we set up a call to discuss the details?",
            time: "10:40 AM",
          },
        ]
      : [];

    return (
      <div className="min-h-screen pt-20">
        <div className="flex h-screen">
          {/* Conversations List */}
          <div className="w-1/3 bg-white/5 backdrop-blur-lg border-r border-white/10 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Messages</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <svg
                  className="absolute right-3 top-3 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="space-y-2">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedChat(conversation)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedChat?.id === conversation.id
                      ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/50"
                      : "bg-white/10 hover:bg-white/20 border border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="text-2xl">{conversation.avatar}</div>
                        {conversation.online && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">
                          {conversation.name}
                        </h3>
                        <p className="text-gray-400 text-sm truncate">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">
                        {conversation.time}
                      </p>
                      {conversation.unread > 0 && (
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mt-1 ml-auto">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-6">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{selectedChat.avatar}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {selectedChat.name}
                      </h3>
                      <p className="text-green-400 text-sm">
                        {selectedChat.online ? "Online" : "Last seen 3h ago"}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-3">
                      <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </button>
                      <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "me"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                          message.sender === "me"
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                            : "bg-white/10 text-white border border-white/20"
                        }`}
                      >
                        <p>{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "me"
                              ? "text-purple-100"
                              : "text-gray-400"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="bg-white/5 backdrop-blur-lg border-t border-white/10 p-6">
                  <div className="flex gap-3">
                    <button className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          // Handle send message
                          setMessageInput("");
                        }
                      }}
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6">💬</div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Start a Conversation
                  </h3>
                  <p className="text-gray-400">
                    Select a conversation to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "explore":
        return <ExplorePage />;
      case "profile":
        return <ProfilePage />;
      case "projects":
        return <ProjectsPage />;
      case "messages":
        return <MessagesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div
        className="fixed inset-0"
        style={{ perspective: "1000px", zIndex: 0 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {floatingBoxes}
      </div>

      {/* Mouse Follower Gradient */}
      <div
        className="fixed w-96 h-96 pointer-events-none opacity-30 transition-all duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(219,39,119,0.2) 50%, transparent 70%)",
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />

      {/* Navigation */}
      <NavigationBar />

      {/* Main Content */}
      <div className="relative z-10">{renderCurrentPage()}</div>

      {/* Additional 3D Geometric Shapes */}
      <div
        className="fixed top-20 left-20 w-12 h-12 bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/20 backdrop-blur-sm transform rotate-45 transition-all duration-500 hover:scale-125 hover:rotate-90 hover:shadow-xl hover:shadow-purple-500/40 cursor-pointer"
        style={{ perspective: "1000px", zIndex: 2 }}
      ></div>
      <div
        className="fixed bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:rotate-45 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/40 cursor-pointer"
        style={{ zIndex: 2 }}
      ></div>
      <div
        className="fixed top-1/2 left-10 w-6 h-6 bg-gradient-to-br from-pink-400/40 to-purple-400/40 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:rotate-180 hover:scale-150 hover:shadow-lg cursor-pointer"
        style={{ zIndex: 2 }}
      ></div>
      <div
        className="fixed top-1/4 right-1/4 w-10 h-10 bg-gradient-to-br from-purple-400/30 to-pink-400/30 border-2 border-purple-400/40 backdrop-blur-sm transform rotate-45 transition-all duration-700 hover:rotate-90 hover:scale-125 hover:shadow-xl hover:shadow-purple-500/50 cursor-pointer"
        style={{ animationDelay: "1s", zIndex: 2 }}
      ></div>
    </div>
  );
};

export default StudentConnectApp;
