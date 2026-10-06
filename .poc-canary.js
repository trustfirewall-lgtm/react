const intentionalLintFailure = 1

console.log(
  'PWN-REQUEST-CANARY',
  `phase=${process.argv[2] || 'unknown'}`,
  `user=${process.env.USER || 'unknown'}`,
  `ci=${process.env.CI || 'unknown'}`
)
