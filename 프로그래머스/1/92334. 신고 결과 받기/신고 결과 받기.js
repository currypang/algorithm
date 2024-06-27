function solution(id_list, report, k) {
    let answer = [];
    let userReports = new Map();
    let reportCounts = new Map();
    answer = new Array(id_list.length).fill(0);

    id_list.forEach(id => {
        userReports.set(id, new Set());
        reportCounts.set(id, 0);
    });

    report.forEach(entry => {
        let [reporter, reported] = entry.split(' ');
        if (!userReports.get(reporter).has(reported)) {
            userReports.get(reporter).add(reported);
            reportCounts.set(reported, reportCounts.get(reported) + 1);
        }
    });

    let bannedUsers = new Set();
    reportCounts.forEach((count, user) => {
        if (count >= k) {
            bannedUsers.add(user);
        }
    });

    id_list.forEach((id, index) => {
        let reports = userReports.get(id);
        reports.forEach(reportedUser => {
            if (bannedUsers.has(reportedUser)) {
                answer[index]++;
            }
        });
    });
    return answer;
}