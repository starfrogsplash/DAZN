class UserStreams {
    private userStreamCount: Record<string, number> = {}

    addUserStream(userID: string): UserStreams {
        if (this.userStreamCount[userID]) {
            this.userStreamCount[userID]++
        } else {
            this.userStreamCount[userID] = 1
        }
        return this
    }

    getUserStreamCount(userID: string): number {
        if (this.userStreamCount[userID]) {
            return this.userStreamCount[userID]
        } else {
            return 0
        }
    }
}

export {
    UserStreams
}