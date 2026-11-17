/**
 * 채널톡 1:1 상담 열기.
 * index.html의 window.openConsultChannel() 이 채널톡 부트와 메신저 표시를 담당합니다.
 * SDK 로드 전에 호출돼도 ChannelIO 스텁 큐에 쌓이므로 바로 이어집니다.
 */
declare global {
  interface Window {
    openConsultChannel?: () => void;
    ChannelIO?: {
      (command: string, payload?: unknown, callback?: (error: unknown, user: unknown) => void): void;
      q?: unknown[];
    };
  }
}

export function openConsult() {
  if (typeof window === "undefined") return;
  if (typeof window.openConsultChannel === "function") {
    window.openConsultChannel();
    return;
  }
  // 아직 index.html의 헬퍼가 없을 때를 대비한 최소 동작
  const ChannelIO = window.ChannelIO;
  if (ChannelIO) {
    ChannelIO("boot", { pluginKey: "b065b9cc-1f27-4780-a688-7d3e28d21b67", hideChannelButtonOnBoot: true }, () => {
      ChannelIO("showMessenger");
    });
  }
}
