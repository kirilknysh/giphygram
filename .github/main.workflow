workflow "unit tests" {
  on = "push"
  resolves = ["run tests"]
}

action "install deps" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "ci"
}

action "run tests" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "test"
  needs = ["install deps"]
}
