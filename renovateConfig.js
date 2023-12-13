module.exports = {
    onboarding: true,
    repositories: [],
    hostRules: [
    ],
    onboardingConfig: {
      extends: [
        "local>defaultConfig"
      ],
      enabledManagers: ["regex"],
      fetchReleaseNotes: "off", // Needs a GitHub token
      minimumReleaseAge: "3 days"
    }
  };