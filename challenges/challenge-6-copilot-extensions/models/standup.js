// Standup Data Store
// In-memory storage for standup entries.
// Your challenge: expand this into a full data layer.

class StandupStore {
  constructor() {
    // In-memory store: Map<username, StandupEntry[]>
    this.entries = new Map();
  }

  /**
   * Add a standup entry for a user.
   * @param {string} username - GitHub username
   * @param {object} entry - { yesterday, today, blockers, timestamp }
   */
  addEntry(username, entry) {
    if (!this.entries.has(username)) {
      this.entries.set(username, []);
    }
    this.entries.get(username).push({
      ...entry,
      timestamp: entry.timestamp || new Date().toISOString(),
    });
  }

  /**
   * Get recent entries for a user.
   * @param {string} username
   * @param {number} limit
   * @returns {object[]}
   */
  getEntries(username, limit = 5) {
    const userEntries = this.entries.get(username) || [];
    return userEntries.slice(-limit);
  }

  /**
   * Get all entries from today across all users.
   * @returns {Map<string, object>}
   */
  getTodayEntries() {
    const today = new Date().toISOString().split("T")[0];
    const todayEntries = new Map();
    for (const [username, entries] of this.entries) {
      const todayEntry = entries.filter((e) => e.timestamp.startsWith(today));
      if (todayEntry.length > 0) {
        todayEntries.set(username, todayEntry[todayEntry.length - 1]);
      }
    }
    return todayEntries;
  }
}

module.exports = { StandupStore };
