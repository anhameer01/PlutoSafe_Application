public class UserSession
{
    public string Token { get; set; }
    public string DealerProfileId { get; set; }
    public string UserName { get; set; }
    public string Email { get; set; }

    public int ActiveCount{ get; set;}

    public int PendingCount { get; set; }
    public int LockedCount { get; set; }
    public int RemovedCount { get; set; }
    public int UnlockedCount { get; set; }
    public int RemainingKeyCount { get; set; }
    public int TodayActivationCount { get; set; }

    // public string AlternateMoblie="";
    public bool IsIphone { get; set; }

    public int UnassignedCount{ get;set;}
}